document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('.table');
    const table_header = document.querySelector('#table_head');
    const header1 = document.querySelector('#header1');
    const header2 = document.querySelector('#header2');
    const header3 = document.querySelector('#header3');
    const header4 = document.querySelector('#header4');
    let table_body = document.querySelector('#table_body');

    let arrStudents = [];

    function sortFIO() {
            arrStudents.sort((a, b) => a.surname > b.surname ? 1 : -1);
            clearTable();
            fillTable();
        }

    function sortFaculty() {
        arrStudents.sort((a, b) => a.faculty > b.faculty ? 1 : -1);
        clearTable();
        fillTable();
    }
    function sortBirth() {
        arrStudents.sort((a, b) => a.dateBirth > b.dateBirth ? 1 : -1);
        clearTable();
        fillTable();
    }
    function sortYear() {
        arrStudents.sort((a, b) => a.yearAdmission > b.yearAdmission ? 1 : -1);
        clearTable();
        fillTable();
    }

    arrStudents.push({
        surname: 'Гришко Олег Витальевич',
        faculty: 'ИСТ',
        dateBirth: new Date(1986,10,17),
        yearAdmission: 2004,   
    });
    arrStudents.push({
        surname: 'Чердакли Максим Иванович',
        faculty: 'Юридический',
        dateBirth: new Date(1987,08,23),
        yearAdmission: 2019,   
    });
    arrStudents.push({
        surname: 'Балабан Евгений Сергеевич',
        faculty: 'Экономический',
        dateBirth: new Date(1988,07,25),
        yearAdmission: 2005,   
    });
    arrStudents.push({
        surname: 'Чулков Илья Игорьевич',
        faculty: 'ИСТ',
        dateBirth: new Date(1986,01,27),
        yearAdmission: 2004,   
    });

    function clearTable() {
         let rowCount = table.rows.length;
         for (let i = 1; i < rowCount; i++) {
             table.deleteRow(1);
         }
     }

    //console.log(arrStudents);
    function fillTable() {
        arrStudents.forEach((student, index) => {
            let i = index+1
            let row_i = document.createElement('tr');
            let row_i_data_1 = document.createElement('td');
            //row_i_data_1.innerHTML = "Гришко Олег Витальевич";
            row_i_data_1.innerHTML = student.surname;
            let row_i_data_2 = document.createElement('td');
            //row_i_data_2.innerHTML = "ИСТ";
            row_i_data_2.innerHTML = student.faculty;
            let row_i_data_3 = document.createElement('td');
            //let age = Date.now() - student.dateBirth;
            //row_i_data_3.innerHTML = "17.11.1986 (35)";
            row_i_data_3.innerHTML = student.dateBirth;
            let row_i_data_4 = document.createElement('td');
            //row_i_data_4.innerHTML = "2004 (1 курс)";
            row_i_data_4.innerHTML = student.yearAdmission;
            row_i.appendChild(row_i_data_1);
            row_i.appendChild(row_i_data_2);
            row_i.appendChild(row_i_data_3);
            row_i.appendChild(row_i_data_4);
            table_body.appendChild(row_i);
    })
}

    header1.addEventListener('click', sortFIO);
    header2.addEventListener('click', sortFaculty);
    header3.addEventListener('click', sortBirth);
    header4.addEventListener('click', sortYear);

    fillTable();
})