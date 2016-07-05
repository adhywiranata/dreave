#!/usr/bin/mongo

var db = new Mongo().getDB("dreavedb");

db.notes.remove({});

db.notes.insert([
  { id:1, title:"title ABC", description:"descript123"},
  { id:2, title:"my lovely dog", description:"descript124"},
  { id:3, title:"title ABD", description:"descript123"}
]);
