function onClickInputButton(elem) {
    const inputBoxElem = document.querySelector("#input-box");
    const inputBoxValue = inputBoxElem.value;
    document.querySelector(".to-do-list").innerHTML += `
    <li>
    <input type="checkbox" class="checkbox"/>
    <span>${inputBoxValue}</span>
    <input type="button" id="inputbuttonremove" value="삭제" onclick="onClickDeleteButton(this)">
    </li>`;
    inputBoxElem.value = "";
  }

  function onClickCheckbox(checkboxElem) {
    const liElem = checkboxElem.parentElement;
    const spanElem = liElem.querySelector("span");
    if (checkboxElem.checked) {
      spanElem.innerHTML = `<s>${spanElem.innerText}</s>`;
    } else {
      spanElem.innerHTML = `${spanElem.innerText}`;
    }
  }

  function onClickDeleteButton(deleteElem) {
    deleteElem.parentElement.remove();
  }



  // const addBtn = document.querySelector('.addBtn');
  // const removeBtn = document.querySelector('.removeBtn');
  // const uladd = document.querySelector('.uladd');

  // addBtn.addEventListener("click", e=>{
  //     e.preventDefault();
  //     const newLi = document.createElement("li");
  //     newLi.val("");
  //     uladd.appendChild(newLi);
  // });

  // removeBtn.addEventListener("click", e=>{
  //     uladd.removeChild(uladd.lastChild);
  // });