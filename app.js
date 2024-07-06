// const express = require("express");
// const app = express();
// const router = express.Router();
// const port = 3001;

// app.get("/", (req, res) =>{
//      res.status(200).send("Hello Node");
//     // res.json( { message : "Hello Node!" });
// });








const express = require("express");
const app = express();
const router = express.Router();

const port = 3001;

app.get((req, res) => {
  res.status(200).send("Hello Node!");
});

router
  .route("/contacts")
  .get((req, res) => {
    // 모든 연락처 가져오기
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    // 새 연락처 추가하기
    res.status(201).send("Create Contacts");
  });


  // // 모든 연락처
// router
//     .route("contacts")    contacts 앞에  가 빠져서 그럴수 있음
//     .get((req, res) => {
//         res.status(200).send("contacts Page")
//     })
//     .post((req, res) => {
//         res.status(200).send("Create Contacts");
//     });


router
  .route("/contacts/:id")
  .get((req, res) => {
    // 연락처 상세보기
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
  })
  .put((req, res) => {
    // 연락처 수정하기
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    // 연락처 삭제하기
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  });

// // 개별 연락처
// router
//     .route("/contacts/:id")
//     .get((req,res) => {
//         res.status(200).send(`View Contact for ID: ${req.params.id}`);
//     })
//     .put((req,res) => {
//         res.status(200).send(`Update Contact for ID: ${req.params.id}`);
//     })
//     .delete((req,res) => {
//         res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
//     });





app.use(router);

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
