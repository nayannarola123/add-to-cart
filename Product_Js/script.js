let pName = document.getElementById("name");
let pemail = document.getElementById("email");
let pMsg = document.getElementById("msg");
let data = document.getElementById("datapnt");

let isEdit = false;
// console.log("Truuue IS ", isEdit);
let isIndex;
console.log("Index is  IS ", isIndex);

// getdata

const getdata = () => {
  let data = JSON.parse(localStorage.getItem("User"));

  if (data) {
    return data;
  } else {
    return [];
  }
};
let array = getdata();

// create
const form = () => {
  obj = {
    id: isIndex ? isIndex : Math.floor(Math.random() * 1000),
    name: pName.value,
    email: pemail.value,
    msg: pMsg.value,
  };

  if (isEdit) {
    let abc = [...array];

    const updateDT = abc.map((data) => {
      if (data.id == isIndex) {
        return (data = obj);
      } else {
        // console.log("NAme ", data);
        return data;
      }
    });
    // console.log("DATA IS", updateDT);
    array = updateDT;

    isIndex = undefined;
    isEdit = false;
  } else {
    array = [...array, obj];
    read();
  }

  // array.push(obj);
  // console.log(array);

  pName.value = "";
  pemail.value = "";
  pMsg.value = "";

  localStorage.setItem("User", JSON.stringify(array));

  read();
  return false;
};

// edit
const editF = (id) => {
  let data = [...array];
  // console.log("Data is", data);
  let editData = data.filter((edt) => {
    return edt.id == id;
  });
  // console.log("Jay Hoo", editData.id);
  console.log(editData[0]);
  pName.value = editData[0].name;
  pemail.value = editData[0].email;
  pMsg.value = editData[0].msg;

  isEdit = true;
  // console.log("true is ", isEdit);
  isIndex = id;
  console.log("index is", isIndex);
};

// read

const read = () => {
  data.innerHTML = "";
  array.forEach((dt) => {
    data.innerHTML += `<tr><td>${dt.id}</td><td>${dt.name}</td><td>${dt.email}</td><td><button class="bg-blue-500 mb-3 px-4 py-1 rounded-xl text-white" onclick="return editF(${dt.id})">
                  Edit
                </button></td><td><button class="bg-red-500 mb-3 px-4 py-1 rounded-xl text-white">
                  Delete
                </button></td></tr>`;
  });
};
read();

const deleteData = (id) => {

  let record = [...storage];

  let delRec = record.filter((rec) => {
      return rec.id != id;
  })

  localStorage.setItem('product', JSON.stringify(delRec));
  storage = getData();
  viewData();
}
