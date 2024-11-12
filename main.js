const bucketListPara1 = document.createElement("p");
bucketListPara1.innerText = "Play ball";

const listSection = document.querySelector(".list");
listSection.appendChild(bucketListPara1);

const bucketListPara2 = document.createElement("p");
bucketListPara2.innerText = 'This is "afterbegin"';

const bucketListPara3 = document.createElement("p");
bucketListPara3.innerText = 'This is "afterend"';

const bucketListPara4 = document.createElement("p");
bucketListPara4.innerText = 'This is "beforebegin"';

const bucketListPara5 = document.createElement("p");
bucketListPara5.innerText = 'This is "beforeend"';

listSection.insertAdjacentElement("afterbegin", bucketListPara2);
//listSection.insertAdjacentElement("afterend", bucketListPara3);
//listSection.insertAdjacentElement("beforebegin", bucketListPara4);
listSection.insertAdjacentElement("beforeend", bucketListPara5);

console.log(listSection.innerHTML);

//listSection.innerHTML = "<p>Travel with hubby</p>"; //rewriting the entire inner HTML with this

const bucketListPara6 = document.createElement("p");
bucketListPara6.innerText = "Make friends";
listSection.insertAdjacentElement("afterbegin", bucketListPara6);

const extraBucketList = [
  "Spend time with mama",
  "Spend time with papa",
  "Sit on mama's lap",
];

extraBucketList.forEach((item) => {
  const para = document.createElement("p");
  para.innerHTML = item;
  listSection.insertAdjacentElement("beforeend", para);
});

const listElement = document.querySelector(".list");
for (const child of listElement.children) {
  console.log(child.innerText);
}

const ownerElement = document.querySelector(".owner");
ownerElement.innerHTML = "Poppy Butt Hole's";

const bucketListPara7 = document.createElement("p");
bucketListPara7.innerText = "Make many friends";

listElement.replaceChild(bucketListPara7, bucketListPara6);

const bucketListPara8 = document.createElement("p");
bucketListPara8.innerText = "Sit on fluff";

listElement.replaceChild(bucketListPara8, bucketListPara2);

const bucketListPara9 = document.createElement("p");
bucketListPara9.innerText = "Have my own garden";

listElement.replaceChild(bucketListPara9, bucketListPara5);

const lastChild = listElement.lastChild;
listElement.removeChild(lastChild);
