let mhs = {
    name: "daffa",
    age:20,
    major: "TRPL",
    skills: ['sysadmin', 'OOP', 'Design'],
    poor: true,//miskin
}




//ternary//
// consolo.log (mhs.major == "TRPL" ? mhs.name + "Jurusa TRPL" : mhs.name + "Bukan TRPL")

//Switch Case
// switch (mhs.major) {
//     case "TRMG":
//        console.log(mhs.name + "Jurusan TRMG");
//      break;
//      case "TRKJ":
//         console.log(mhs.name + "Jurusan TRKJ");
//         case "TRPL":
//         console.log(mhs.name + "Jurusan TRPL");
//         break;
//         default:
//             console.log(mhs.name + "Bukan anak TRPL");
// }

// conditional function

function cekKelulusan(perserta){

    let age = perserta.age;
    let poor = perserta.poor;
    let skills = perserta.skills;
    console.log(perserta)

    if (age < 21, poor == true , skills.length > 2) {
        console.log("mahasiswa lulus")
     } else if (age > 21 , poor == true , skills.length > 2) {
        console.log("mahasiswa hampir lulus")
    }  else{
        console.log("mahasiswa tidak lulus")
    }
}

cekKelulusan(mhs)

