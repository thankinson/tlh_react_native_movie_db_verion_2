import * as SQLite from 'expo-sqlite';
import { MoviesDb } from '../models/movies';
const database = SQLite.openDatabase('movies.db');

export function init(){
  const promise = new Promise((resolve, reject)=>{
    database.transaction((tx)=>{
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS movies (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          about TEXT NOT NULL,
          poster TEXT NOT NULL,
          movieId INTEGER NOT NULL UNIQUE
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise
};

export function addMovie(movie){
  const promise = new Promise((resolve, reject)=>{
    database.transaction((tx)=>{
      tx.executeSql(`INSERT INTO movies (title, about, poster, movieId) VALUES (?, ?, ?, ?)` 
      [
        movie.title,
        movie.about,
        movie.poster,
        movie.movieId
      ],
      (_, result)=>{
        console.log(result)
        resolve(result)
      },
      (_, error)=>{
        reject(error)
      });
    });
  });
  return promise
};

export function getAllMovies(){
  const promise = new Promise((resolve, reject)=>{
    database.transaction((tx)=>{
      tx.executeSql(`SELECT * FROM movies`,
      [],
      (_, result) => {
        const movies = []
        for (const dm of result.rows._array){
          movies.push(new MoviesDb(
            dm.id,
            dm.title,
            dm.poster,
            dm.about,
            dm.movieId        
          ))
        }
        console.log(result)
        resolve(movies)
      },
      (_, error) => {
        reject(error)
      }
      )
    })
  })
  return promise
}

export function getSingleMovie(id){
  const promise = new Promise((resolve, reject)=>{
    database.transaction((tx)=>{
      tx.executeSql(`SELECT * FROM movies WHERE id = ?`,
      [id],
      (_, result) => {
        const dbMovie = result.rows._array[0]
        const movie = new MoviesDb(
          dbMovie.id,
          dbMovie.title,
          dbMovie.poster,
          dbMovie.about,
          dbMovie.movieid
        )
        resolve(movie)
      },
      (_, error) => {
        reject(error)
      }
      )
    })
  })
  return promise
}

export function deleteMovie(id){
  const promise = new Promise((resolve, reject)=>{
    database.transaction((tx)=>{
      tx.executeSql(`DELETE FROM movies WHERE id = ?`,
      [id],
      (_, result) => {
        resolve(result)
      },
      (_, error) => {
        reject(error)
      }
      )
    })
  })
  return promise
}