const url = "http://localhost:8080/ktp";

function loadData() {

    fetch(url)
        .then(res => res.json())
        .then(data => {

            let table = document.getElementById("table");

            table.innerHTML =
                "<tr><th>ID</th><th>Nama</th><th>Aksi</th></tr>";

            data.forEach(d => {

                table.innerHTML +=
                    "<tr>" +
                    "<td>" + d.id + "</td>" +
                    "<td>" + d.namaLengkap + "</td>" +
                    "<td>" +
                    "<button onclick='hapus(" + d.id + ")'>Hapus</button>" +
                    "</td>" +
                    "</tr>";
            });

        });
}


function tambah() {

    let data = {

        nomorKtp: document.getElementById("nomorKtp").value,
        namaLengkap: document.getElementById("namaLengkap").value,
        alamat: document.getElementById("alamat").value,
        tanggalLahir: document.getElementById("tanggalLahir").value,
        jenisKelamin: document.getElementById("jenisKelamin").value
    };

    fetch(url, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    })
        .then(() => loadData());
}


function hapus(id) {

    fetch(url + "/" + id, {

        method: "DELETE"

    })
        .then(() => loadData());
}


loadData();