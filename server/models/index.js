const db = require('./db');
const Student = require('./students');
const Campus = require('./campuses');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
    db, Student, Campus
}