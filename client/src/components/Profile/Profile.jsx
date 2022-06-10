import { Container } from '@mui/system';
import React, { useState } from 'react';

import './Profile.css';
import avatar from '../../assets/images/avatar.jpeg'
import ach1 from '../../assets/images/1.png'
import ach2 from '../../assets/images/2.png'
import ach3 from '../../assets/images/3.png'
import ach4 from '../../assets/images/4.png'
import ach5 from '../../assets/images/5.png'
import ach6 from '../../assets/images/6.png'
import ach7 from '../../assets/images/7.png'
import { Avatar } from '@mui/material';


function Profile() {
  const games = [
                  {title: 'Футбол на стадионе', description: 'Собираемся играть в футбол', date: '1 июня 2022', time: '15:30'},
                  {title: 'Баскетбольный матч', description: 'Команды 5х5', date: '5 июня 2022', time: '10:00'},
                  {title: 'Велопробег', description: 'От Тюмени до Назрани', date: '6 июня 2022', time: '11:30'},
                  {title: 'Футбол', description: 'На крытом поле', date: '11 июня 2022', time: '12:40'},
                  {title: 'Баскетбол', description: 'Площадка рядом с домом Лехи', date: '13 июня 2022', time: '20:00'},
                  {title: 'Футбол', description: 'Центральный стадион', date: '18 июня 2022', time: '8:30'},
                ]

  const achievements = [
                          {id: 1, src: ach1, desc: 'Участвовал в более чем 10 матчах'},
                          {id: 2, src: ach2, desc: 'Организовал более 5 мероприятий'},
                          {id: 3, src: ach3, desc: 'Играл в дождь'},
                          {id: 4, src: ach4, desc: 'Участвовал в мероприятии дальше 10км от дома'},
                          {id: 5, src: ach5, desc: 'Выиграл турнир'},
                          {id: 6, src: ach6, desc: 'Участвовал в праздничном турнире'},
                          {id: 7, src: ach7, desc: 'Капитальный красавчик!!!'},
                       ]

  const [visibleDescr, setVisibleDescr] = useState({isVisible: false, descr: ''})
  const [selectedAch, setSelectedAch] = useState(0)

  return (
    <div className="profile">
      <Container>
        <div className="profile__top">
          <img src={avatar} alt='avatar' className='profile__top-avatar' />
          <div className="profile__top-info">
            <p>Melnikov Alex</p>
            <p>40 лет</p>
          </div>
        </div>

        <div className="profile__middle">
          <div className="profile__middle-left">
          <h2>Участвую в:</h2>
            {games.map((game, index) => 
              <div key={game.description} className="profile__middle-left-item">
                <div>
                  {index + 1}. <a href="#"> {game.title}</a>
                  <p className='description'>{game.description}</p>
                </div>
                <div className='right_side'>
                  <pre>{game.date}</pre>
                  <pre>{game.time}</pre>
                </div>
              </div>
              )}
          </div>
          <div className="profile__middle-right">
            <h2>Достижения</h2>
            <div className="profile__achievements">
              <ul>
                {achievements.map(achievement => <li key={achievement.id} onClick={() => {setVisibleDescr({isVisible: true, descr: achievement.desc}); setSelectedAch(achievement.id);}}><Avatar src={achievement.src} sx={selectedAch === achievement.id ? { width: 70, height: 70, border: '2px solid black'} : { width: 70, height: 70, border: '2px solid transparent'}}/></li>)}
              </ul>
            </div>
            {visibleDescr.isVisible && (
              <div className="achDescription">
                {visibleDescr.descr}
              </div>)}
            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
