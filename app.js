import { db } from "./firebase-config.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("accounts-container");

async function loadAccounts() {

  container.innerHTML = "";

  const snapshot = await getDocs(
    collection(db, "accounts")
  );

  let count = 0;

  snapshot.forEach((doc) => {

    count++;

    const acc = doc.data();

    container.innerHTML += `
      <div class="account-card">

       <img
src="${acc.image}"
alt="${acc.name}"
class="preview-image"
data-image="${acc.image}">

        <div class="account-info">

          <h3>${acc.name}</h3>

          <p>${acc.description}</p>

          <h2>${acc.price}</h2>

          <button
            class="buy-btn"
            onclick="buyAccount('${acc.name}')">
            شراء الآن
          </button>

        </div>

      </div>
    `;

  });

  const counter =
    document.getElementById("account-count");

  if (counter) {
    counter.textContent = count;
  }

}

window.buyAccount = function(name) {

  const msg = encodeURIComponent(
`السلام عليكم

أريد شراء الحساب:

${name}`
  );

  window.open(
    `https://wa.me/213657492675?text=${msg}`,
    "_blank"
  );

};

const sellBtn =
document.getElementById("sellBtn");

if (sellBtn) {

  sellBtn.addEventListener("click", () => {

    const name =
      document.getElementById("name").value;

    const phone =
      document.getElementById("phone").value;

    const desc =
      document.getElementById("desc").value;

    const image =
      document.getElementById("imageLink").value;

    const msg = encodeURIComponent(
`طلب بيع حساب

الاسم: ${name}

الهاتف: ${phone}

الوصف: ${desc}

الصورة: ${image}`
    );

    window.open(
      `https://wa.me/213657492675?text=${msg}`,
      "_blank"
    );

  });

}

loadAccounts();
document.addEventListener("click",(e)=>{

if(e.target.classList.contains("preview-image")){

const modal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

modal.style.display = "flex";

modalImage.src =
e.target.dataset.image;

}

});

document.querySelector(".close-modal")
.addEventListener("click",()=>{

document.getElementById("imageModal")
.style.display = "none";

});

document.getElementById("imageModal")
.addEventListener("click",(e)=>{

if(e.target.id==="imageModal"){

e.currentTarget.style.display="none";

}

});
