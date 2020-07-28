"use strict";

const users = JSON.parse('[\n' +
    '  {\n' +
    '    "id": 1,\n' +
    '    "firstName": "Jason",\n' +
    '    "lastName": "Statham",\n' +
    '    "profilePicture": "https://i.pinimg.com/originals/24/f5/f8/24f5f8ef9f8af9c7e795ff0ba15f6881.jpg",\n' +
    '    "birthday": "26 July 1967",\n' +
    '    "isMale": true,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.instagram.com/jasonstatham/?hl=en",\n' +
    '      "https://twitter.com/realjstatham?lang=en",\n' +
    '      "https://www.facebook.com/JasonStatham/",\n' +
    '      "https://web.telegram.org/jasonstatham/"\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 2,\n' +
    '    "firstName": "Dwayne",\n' +
    '    "lastName": "Johnson",\n' +
    '    "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg",\n' +
    '    "birthday": "2 May 1972",\n' +
    '    "isMale": true,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.facebook.com/DwayneJohnson/",\n' +
    '      "https://www.instagram.com/therock/?hl=en",\n' +
    '      "https://twitter.com/TheRock"\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 3,\n' +
    '    "firstName": "Emma",\n' +
    '    "lastName": "Stone",\n' +
    '    "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg/320px-Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg",\n' +
    '    "birthday": "6 November 1988",\n' +
    '    "isMale": false,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.facebook.com/ImEmmaStone/",\n' +
    '      "https://www.instagram.com/emmastone/?hl=en",\n' +
    '      "https://twitter.com/stoneemma_?lang=en"\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 4,\n' +
    '    "firstName": "Somebody",\n' +
    '    "lastName": "Tuffak",\n' +
    '    "profilePicture": null,\n' +
    '    "birthday": "30 February 2000",\n' +
    '    "isMale": null,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.facebook.com/somebody/",\n' +
    '      "https://www.instagram.com/somebody/?hl=en",\n' +
    '      "https://twitter.com/somebody?lang=en"\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 5,\n' +
    '    "firstName": "Scarlett",\n' +
    '    "lastName": "Johansson",\n' +
    '    "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",\n' +
    '    "birthday": "22 November 1984",\n' +
    '    "isMale": false,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.facebook.com/pages/category/Actor/Scarlett-Johansson-Official-101457158013203/",\n' +
    '      "https://twitter.com/scarlett_jo?lang=en",\n' +
    '      "https://www.instagram.com/scarlett.johansson.fc/?hl=en"\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 6,\n' +
    '    "firstName": "Yevgeny",\n' +
    '    "lastName": "Ponasenkov",\n' +
    '    "profilePicture": "https://www.factroom.ru/wp-content/uploads/2019/06/10-faktov-o-evgenii-ponasenkove-kotoryj-svodit-vsekh-s-uma-1250x883.jpg",\n' +
    '    "birthday": "13 March 1982",\n' +
    '    "isMale": true,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.facebook.com/Ponasenkov",\n' +
    '      "https://twitter.com/Ponasenkov",\n' +
    '      "https://www.instagram.com/evgenii_ponasenkov/?hl=en"\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 7,\n' +
    '    "firstName": "Daniel",\n' +
    '    "lastName": "Day-Lewis",\n' +
    '    "profilePicture": "https://i2.wp.com/comicbookdebate.com/wp-content/uploads/2019/07/There20will20be20blood202-750x460.jpg?resize=750%2C460&ssl=1",\n' +
    '    "birthday": "29 April 1957",\n' +
    '    "isMale": true,\n' +
    '    "isDeleted": false,\n' +
    '    "isSelected": false,\n' +
    '    "contacts": [\n' +
    '      "https://www.facebook.com/DanielDayLewis/",\n' +
    '      "https://twitter.com/blakedaylewis?lang=en",\n' +
    '      "https://www.instagram.com/danielbdaylewis/?hl=en"\n' +
    '    ]\n' +
    '  }\n' +
    ']');
//hostname: "www.facebook.com"
//hostname: "twitter.com"
//hostname: "www.instagram.com"
//hostname: "web.telegram.org"
const swgImage = new Map();
swgImage.set('birthday', './../icons/cake-variant.svg')
swgImage.set('true', './../icons/gender-male.svg')
swgImage.set('false', './../icons/gender-female.svg')
swgImage.set('favorite', './../icons/heart.svg')
swgImage.set("www.facebook.com",'.icon-facebook')
swgImage.set("twitter.com", '.icon-twitter')
swgImage.set("www.instagram.com", '.icon-instagram')
swgImage.set("web.telegram.org", '.icon-telegram')


document.getElementById('cards')?.append(...users.map((user) => createUserCardItem(user)));

function createUserCardItem(user) {
    const {id} = user;
    const userCardItem = document.createElement("article"); //article
    userCardItem.setAttribute('id', id);
    userCardItem.classList.add('userCardItem');

    userCardItem.append(createImgContainer(user),
        createContainerDate(user)
    ); //article = divImg + divDate

    return userCardItem;

}

function createImgContainer(user) {
    const {id, firstName, lastName} = user;
    const container = document.createElement("div");
    container.setAttribute('id', `container${id}`);
    container.classList.add('imgContainer');
    //container.style.setProperty()


    const initial = document.createElement("span");
    initial.classList.add('initial');
    initial.append(
        document.createTextNode(`${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`)
    );

    container.append(initial, createImageUser(user, {parentId: container.id}))
    return container;
}

// img
function createImageUser(user, {parentId}) {
    const {profilePicture, firstName, lastName} = user;
    const img = document.createElement("img");
    img.setAttribute('id', parentId);
    img.setAttribute('src', profilePicture);
    img.setAttribute('alt', `${firstName}  ${lastName} photo`);
    img.classList.add('userImage');
    img.addEventListener('load', onLoadImg);
    img.addEventListener('error', onErrorImg);

    return img
}

function onErrorImg({target}) {
    target.remove();
}

function onLoadImg({target}) {
    document.getElementById(target.id)?.append(target)
}

function createContainerDate(user) {
    const {id} = user;
    const container = document.createElement("div");
    container.setAttribute('id', `container${id}`);
    container.classList.add('containerData');
    //container.style.setProperty()

    container.append(
        createContainerUserName(user),
        createContainerUserDate(user),
        createContainerUserContact(user),
        createContainerUserControl(user)
    )
    return container;
}

function createContainerUserName(user) {
    const {firstName, lastName} = user;
    const name = document.createElement("div");
    name.classList.add('userName');
    name.append(
        document.createTextNode(`${firstName || ""} ${lastName || ""}`.trim())
    );
//////////anonymous////////
    return name;
}

function createContainerUserDate(user) {
    const {birthday, isMale} = user;
    const container = document.createElement("div");
    container.classList.add('userDate');
    container.append(createBirthday(user), createGender(user))

    return container;
}
function createBirthday(user) {
    const {birthday} = user;
    const birthdayElem = document.createElement('span');
    birthdayElem.classList.add('birthday');
    birthdayElem.append(createSVG('birthday'), document.createTextNode(`${birthday}`))

    return birthdayElem;
}

function createGender(user) {
    const {isMale} = user;
    return isMale ? createSVG('true'): createSVG('false')

}
function createSVG(key) {
const img = document.createElement('img');
    img.src = swgImage.get(key);

    return img
}


function createContainerUserContact(user) {
    const container = document.createElement("div");
    container.classList.add('userContact');
const contactLink = createContactLink(user)
    container.append(...contactLink)

    return container;
}
function createContactLink(user) {
    const {contacts} = user;
    const aLinks =[];
    for (const link of contacts) {
        const aLink = document.createElement('a');
        aLink.href = contacts[link];
        aLink.classList.add(swgImage.get(aLink.hostname));
        aLinks.push(aLink);

    }
return aLinks;
}

function createContainerUserControl(user) {
    const {id} = user;
    const container = document.createElement("div");
    container.classList.add('userControl');
    //container.style.setProperty()

    return container;
}













