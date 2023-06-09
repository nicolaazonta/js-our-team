/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
 */


//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const profilesArray = [
    {//------------------------------------------------0
        name: 'Wayne Barnett',
        mansion: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },

    {//------------------------------------------------1
        name: 'Chief Editor',
        mansion: 'Founder & CEO',
        pic: 'angela-caroll-chief-editor.jpg'
    },

    {//------------------------------------------------2
        name: 'Walter Gordon',
        mansion: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },

    {//------------------------------------------------3
        name: 'Angela Lopez',
        mansion: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },

    {//------------------------------------------------4
        name: 'Scott Estrada',
        mansion: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },

    {//------------------------------------------------5
        name: 'Barbara Ramos',
        mansion: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
]
//console.log(profilesArray[0].name);

//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
/* for (let i = 0; i < profilesArray.length; i++) {
   for(let key in profilesArray[i]){
    let thisObject = profilesArray[i];
    console.log(thisObject.name,thisObject.mansion,thisObject.pic );   
   } 
} */

/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */
for (let i = 0; i < profilesArray.length; i++) {

    let markup = ` 
    <div class="col-4 my-2">   
        <div class="card bg-dark p-2 "><!-- /.card -->
            <img class="card-img" src="./assets/img/${profilesArray[i].pic}" alt="">

            <div class="card-img-overlay d-flex flex-column justify-content-between">
                <h3 class="card-title">${profilesArray[i].name}</h3>
                <h8 class="card-subtitle">${profilesArray[i].mansion}</h8>
            </div>            
        </div>
    </div>`;

    document.querySelector('.row').innerHTML += markup;



    /* for(let key in profilesArray[i]){
     let markup = ``
     
        let thisObject = profilesArray[i];
     console.log(thisObject.name,thisObject.mansion,thisObject.pic );   
    }  */
}