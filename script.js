const container = document.getElementById("accountsContainer");

// عرض الحسابات
function loadAccounts() {
  db.collection("accounts").onSnapshot((snap) => {
    container.innerHTML = "";

    snap.forEach(doc => {
      const a = doc.data();

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${a.image}" />
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <p>💰 ${a.price} DA</p>
        <button class="btn" onclick="buy('${a.title}','${a.price}')">شراء</button>
      `;

      container.appendChild(card);
    });
  });
}

// شراء عبر واتساب
function buy(title, price) {
  const phone = "213000000000";
  const msg = `أريد شراء: ${title} بسعر ${price}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

// إضافة حساب (Admin)
function addAccount() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;
  const image = document.getElementById("image").value;

  db.collection("accounts").add({
    title,
    price,
    description: desc,
    image
  });

  alert("تمت الإضافة ✔");
}

loadAccounts();
