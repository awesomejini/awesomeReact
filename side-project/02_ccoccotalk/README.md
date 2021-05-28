# ccoccotalk - X톡 다크모드

---
- 20210528 기록 : 일부 내용 함수로 전환 & 토클 버그 수정
- ---

+ 이미지 수정 및 프로필 디테일 시도 실패  
  ###### (Friends.js 에서 처리하려고 했는데 전체 덮는 div가 만들어 지지 않았음, App.js 에서 건드려야할 것 같다 느낌) 
  실패 소스
  ```javascript
   const FriendDetail = ({ profileImage, name, stateMsg }) => {
    return (
      <>
        <div className="friendDetail">
          <img src={profileImage} alt={name} />
          <p>{name}</p>
          <p>{stateMsg}</p>
        </div>
      </>
    );
  };
  ```
  ```javascript
  props.friendsData.map((friend) => {
                  if (friend.birthDay === true) {
                    return (
                      <li
                        className="li-col"
                        key={friend.id}
                        onClick={(e) => {
                          e.preventDefault();
                          FriendDetail(friend);
                          setFriendDetail(true);
                        }}
                      >  ...

  ```
  
  
  
* [x] 버그 수정 완료

<img width="30%" src="https://user-images.githubusercontent.com/75153322/119943103-8d044400-bfcd-11eb-8de8-3abae6418bde.gif" />

```javascript
const arrow = (modal, boolean) => {
    if (boolean) {
      return (
        <a
          href="/"
          className="toggle-arrow-s"
          onClick={(e) => {
            e.preventDefault();
            modal(false);
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      );
    } else {
      return (
        <a
          href="/"
          className="toggle-arrow-s"
          onClick={(e) => {
            e.preventDefault();
            modal(true);
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      );
    }
  };
  
  {birthModal === true
              ? arrow(setBirthModal, true)
              : arrow(setBirthModal, false)}
```

```javascript
e.preventDefault();
// 미 기재로 인한 버그로 수정 완료했습니다.
```



---
- 20210427 기록
- ---

버그 : 토글 아이콘 클릭시 새로고침 버그 (클릭 한번에 새로고침)

<img width="30%" src="https://user-images.githubusercontent.com/75153322/119943813-80342000-bfce-11eb-86ac-8e0a8b0231eb.gif" />

```javascript
import React, { useState } from 'react';
import './Friends.css';

function Friends(props){
  let [birthModal, setBirthModal] = useState(true);
  let [favModal, setFavModal] = useState(true);
  let [recommModal, setRecommModal] = useState(true);
  let [channModal, setChannModal] = useState(true);
  let [friendsModal, setFriendsModal] = useState(true);

  return (
    <>
      <div className="friends-wrap">
        <ul className="ul-row">
          <li className="li-row">Friends</li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-search"> </a></li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-user-plus"> </a></li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-music"> </a></li>
          <li className="li-row"><a href="/" className="searchBtn fas fa-cog"> </a></li>
        </ul>
      </div>
      <div className="friends-list-wrap">
        <ul className="ul-col">
          <li className="li-col">
            <a href="/" className="thumb-img-s-my"> </a>
            <div className="text">
              <h4>어썸지니</h4>
              <p>겅부쟁이~</p>
            </div>
          </li>
          
          {/* 생일 */}
          <ul>
            <h6>Friends with Birthdays</h6>

            {
              birthModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setBirthModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : null
              // (<a href="/" className="toggle-arrow-s" onClick={()=>{ setBirthModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }
            
            {
              birthModal === true
              ? (
              props.friendsData.map((friend)=>{
                  if (friend.birthDay === true){
                    return (
                      <li className="li-col" key={friend.id}>
                        <div className="update-img-dot">.</div>
                        <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                        <div className="text">
                          <h4>{friend.name} 🎂</h4>
                          <p>{friend.stateMsg}</p>
                        </div>
                        <a href="/" className="gift-shop round-btn-s">Gift Shop <i className="fas fa-gift red"></i></a>
                      </li>
                    );
                  }
              })
              )
              : null
              
            }
            <li className="li-col">
              <a href="/" className="thumb-img-s-birth"> </a>
              <div className="text">
                <h4>View more birthdays</h4>
              </div>
              <a href="/" className="go-arrow-s">100 <i className="fas fa-chevron-right"></i></a>
            </li>
          </ul>

          {/* 즐겨찾기 */}
          <ul>
            <h6>Favorites</h6>
            {
              favModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFavModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFavModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }
            {
              favModal === true
              ? (
                props.friendsData.map((friend)=>{
                  if (friend.fav === true){
                    if (friend.music === false) {
                      return (
                        <li className="li-col" key={friend.id}>
                          <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                          <div className="text">
                            <h4>{friend.name}</h4>
                            <p>{friend.stateMsg}</p>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li className="li-col" key={friend.id}>
                          <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                          <div className="text">
                            <h4>{friend.name}</h4>
                            <p>{friend.stateMsg}</p>
                          </div>
                          <a href="/" className="music-play round-btn-s">{friend.musicTitle} <i className="fas fa-play green"></i></a>
                        </li>
                      );
                    }
                  }
                })
              )
              : null
            }
          </ul>

          {/* 추천친구 */}
          <ul>
            <h6>Recommended Friends</h6>
            {
              recommModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setRecommModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setRecommModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }

            {
              recommModal === true
              ? (<li className="li-col">
                  <a href="/" className="thumb-img-s-recomm"> </a>
                  <div className="text">
                    <h4>Discover more people</h4>
                  </div>
                  <a href="/" className="go-arrow-s">100 <i className="fas fa-chevron-right"></i></a>
                </li>)
              : null
            }
          </ul>

          {/* 채널 */}
          <ul>
            <h6>Channel</h6>
            {
              channModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setChannModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setChannModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }

            {
              channModal === true
              ? (<li className="li-col">
                  <a href="/" className="thumb-img-s-channel"> </a>
                  <div className="text">
                    <h4>Channel</h4>
                  </div>
                  <a href="/" className="go-arrow-s">100 <i className="fas fa-chevron-right"></i></a>
                </li>)
              : null
            }
            {
              channModal === true
              ? props.channelData.map((channel)=>{
                  return (
                    <li className="li-col" key={channel.id}>
                      <a href="/" className="thumb-img-s-channel" style={{ background: `white url(${channel.profileImage}) no-repeat top center/100%`, }}> </a>
                      <div className="text">
                        <h4>{channel.name}</h4>
                        <p>{channel.stateMsg}</p>
                      </div>
                    </li>
                  );
                })
              : null
            }
          </ul>

          {/* 친구목록 */}
          <ul>
            <h6>Friends 100</h6>
            {
              friendsModal === true
              ? (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFriendsModal(false) }}><i className="fas fa-chevron-up"></i></a>)
              : (<a href="/" className="toggle-arrow-s" onClick={()=>{ setFriendsModal(true) }}><i className="fas fa-chevron-down"></i></a>)
            }
            
            {
              friendsModal === true
              ? (
                props.friendsData.map((friend)=>{
                return (
                  <li className="li-col" key={friend.id}>
                    <a href="/" className="thumb-img-s-normal" style={{ background: `white url(${friend.profileImage}) no-repeat top 4px center/70%`, }}> </a>
                    <div className="text">
                      <h4>{friend.name}</h4>
                      <p>{friend.stateMsg}</p>
                    </div>
                  </li>
                );
              }))
              : null
            }
          </ul>


        </ul>
      </div>
    </>
  );
}

export default Friends;
```

