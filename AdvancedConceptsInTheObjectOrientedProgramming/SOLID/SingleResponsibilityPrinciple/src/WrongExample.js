const fs = require("fs");
const path = require("path");

module.exports = class Album {
    constructor(artist, title, year){
        this._artist = artist;
        this._title = title;
        this._year = year;
    }

    get artist(){
        return this._artist;
    }
    set artist(value){
        if(typeof value !== String){
            throw new Error("The artist must be a string")
        }else{
            this._artist = value;
        }
    }

    get title(){
        return this._title;
    }
    set title(value){
        if(typeof value !== String){
            throw new Error("The title must be a string")
        }else{
            this._title = value;
        }
    }

    get year(){
        return this._year;
    }
    set year(value){
        if(1950 < value < 2022){
            this._year = value;
        }else{
            throw new Error("The year must be between 1950 and 2022")
        }
    }

    toJSON(){
        return {
            artist: this.artist,
            title: this.title,
            year: this.year
        }
    }

    toFileName(){
        return `${this.artist}_${this.title}`;
    }

    save(){
        const fileName = this.toFileName();
        const file = path.join(__dirname, fileName);
        return new Promise(
            (resolve, reject) => {
                fs.writeFile(file, JSON.stringify(this, null, 2)),
                (error) => {
                    if(error){
                        reject(error);
                    }else{
                        resolve();
                    }
                }
            }
        )
    }
}