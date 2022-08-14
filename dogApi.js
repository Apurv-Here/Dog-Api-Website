// https://dog.ceo/api/breeds/image/random

// console.log("Checking dog website");

// fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => console.log());

// ---------------------------------------------------------------
const dogImageDiv = document.getElementById("dogimageDiv");
const breedNameDiv = document.getElementById("breedName");
// ---------------------------------------------------------------


// another way of doing it
const updateDogImage = async () => {
    const url = `https://dog.ceo/api/breeds/image/random`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    // console.log("Image url is : ");
    let dogImgUrl = parsedData.message;
    // console.log(dogImgUrl);

    let breed = breedName(dogImgUrl);
    // console.log("breed is:")
    // console.log(breed);

    if (parsedData.status === "success") {
        dogImageDiv.innerHTML = `<img class="h-72 w-72 md:h-96 md:w-96 object-cover rounded-md border-[1px] border-white" src="${dogImgUrl}" alt="dog is on the way"/>`;

        breedNameDiv.innerHTML = `<h4>Breed name : ${breed}</h4>`;
    }
    else {
        dogImageDiv.innerHTML = `<img class="h-72 w-72 md:h-96 md:w-96 object-cover rounded-md border-[1px] border-white" src="/Labrador.jpg" alt="dog is on the way"/>`;

        breedNameDiv.innerHTML = `<h4>Breed name : Labrador</h4>`;
    }



}

updateDogImage();

const changeImgOnClick = () => {
    updateDogImage();
}

const breedName = (wholeURl) => {

    let breedFirstName = "";
    let breedSecondName = "";
    let tempIndex = 30;

    let flag = false;
    while (wholeURl[tempIndex] != '/') {

        if (wholeURl[tempIndex] == '-') {
            tempIndex++;
            while (wholeURl[tempIndex] != '/') {
                breedFirstName += wholeURl[tempIndex];
                tempIndex++;
            }
            flag = true;
            break;
        }
        if (flag === true) {
            break;
        }
        breedSecondName += wholeURl[tempIndex];
        tempIndex++;
    }


    if (flag === true) {
        breedFirstName += " ";

        return breedFirstName + breedSecondName;
    }

    return breedSecondName;
}

