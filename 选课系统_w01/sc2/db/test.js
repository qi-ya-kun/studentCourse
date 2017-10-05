require('babel-polyfill');
let Student = require('../model/Student');
let studentDB = require('./studentDB');


//查询所有
studentDB.findAll().then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});


/*
//通过id查找
studentDB.findById(1).then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});
*/

/*
//模糊查询
studentDB.query("王").then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});
*/

/*
//保存
var student = new Student(null,'赵六','男','1995-09-1');
studentDB.save(student).then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});
*/

/*
//修改
var student = new Student(15,'刘七3','男','1995-09-1');
studentDB.save(student).then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});
*/

/*
//删除
var ids = [18,19];
studentDB.batchDelete(ids).then(function(results){
  console.log(results);
}).catch(function(error){
  console.log("报错了！",error);
});
*/