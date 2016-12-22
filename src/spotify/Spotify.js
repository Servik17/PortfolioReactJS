import React, { Component } from 'react';
import ArtistsList from './ArtistsList';
import axios from 'axios';      //Билиотека для AJAX запросов

export default class Spotify extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: '',                     //Данные из поля поиска
            artistsList: this.getArtists(), //Список исполнителей из sessionStorage
            err: undefined                  //Ошибки, возникающие в процессе
        };
        
        this.getArtists = this.getArtists.bind(this);
        this.submited = this.submited.bind(this);
        this.handleChanged = this.handleChanged.bind(this);
        this.artistsOrErr = this.artistsOrErr.bind(this);
    }
    
    //Функция получения данных из sessionStorage 
    getArtists() {
        let artistsInStorage = sessionStorage.getItem('artists');

        if (artistsInStorage) {
            let artists = JSON.parse(artistsInStorage);            
            return artists;
        } else {
            return undefined;
        }
    }
    
    //Функция записи вводимогоисполнителя
    handleChanged(event) {        
        this.setState({
            search: event.target.value,
            err: undefined
        });
    }
    
    //Функция получения искомого исполнителя через AJAX запрос и запись в состояние
    submited(event) {        
        event.preventDefault();  
              
        sessionStorage.setItem('searchVal', this.state.search);
    
        let query = this.state.search;                 //Запрос введеный пользователем
        let url = 'https://api.spotify.com/v1/search'; //URL запроса

        if (query.length === 0) {           //Если поле поиска пустое
            this.setState({
                err: 'Пустое поле поиска'
            });
        } else {                            //AJAX запрос если поле поиска не пустое
            axios.get(url, {
                params: {                   //Параметры запроса
                    type: 'artist',
                    q: query,
                    limit: 50
                }
            }).then(response => {           //Ответ на запрос и запись данных в состояние
                let items = response.data.artists.items;
            
                if (items.length === 0) { //Если пустой ответ
                    this.setState({
                        artistsList: undefined,
                        err: 'Ничего не найдено'
                    });
                } else {                                        //Если не пустой ответ
                    const artists = JSON.stringify(items);
                    sessionStorage.setItem('artists', artists); //Сохранение данных в sessionStorage
                    
                    this.setState({                             //Запись данных ответа в состояние        
                        artistsList: items,
                        err: undefined
                    });
                }
            }).catch(err => {                   //Обработка ошибок
                if (err.status >= 500) {        //Ошибка сервера
                    this.setState({
                        artistsList: undefined,
                        err: 'Ошибка сервера'
                    });
                } else if (err.status === 400) {//Неверный запрос, ничего не найдено
                    this.setState({
                        artistsList: undefined,
                        err: 'Неверный запрос'
                    });
                } else {                        //Другие возможные ошибки
                    this.setState({
                        artistsList: undefined,
                        err: err.message
                    });
                }
            });
        }
    }
    
    //Функция выбора отображения списка исполнителей либо ошибки
    artistsOrErr(state) {
        //Поумолчанию ничего не будем отображать
        let artists = <div></div>; 
        
        //Выбор отображения (список найденых исполнителей либо ошибка)
        //Если в состоянии присутствует err будем отображать текст ошибки
        if (state.err) {  
            artists = <div className="alert alert-danger">
                        <strong>{ state.err }</strong>
                      </div>;
        //Если в состоянии присутствует artistsList будем отображать список
        //передаем в компонент artistsList
        } else if (state.artistsList) {  
            artists = <ArtistsList artists={ state.artistsList }/>;
        }
        
        return artists;
    }
    
    render() {
        //Возвращаем шаблон с полем для поиска и списком найденного либо ошибкой
        return (
            <div className="col-sm-offset-2 col-sm-8">
                <form className="form-inline" onSubmit={ this.submited } >
                    <div className="form-group">
                        <label htmlFor="search">Найти:</label>
                        <input className="form-control" 
                               id="search" 
                               placeholder="Исполнитель" 
                               onChange={ this.handleChanged }
                               defaultValue={ sessionStorage.getItem('searchVal') || '' }>
                        </input>
                    </div>
                    <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search"></span> {`Искать ${ this.state.search }`}
                    </button>
                </form>
                
                { this.artistsOrErr(this.state) }
            </div>
        );
    }
}
