$(document).ready(() => {
  $('#submit').click((e) => {
    e.preventDefault();
    submit();
  });

  const submit = () => {
    $.ajax({
      type: 'POST',
      url: 'B.php',
      data: $('#form').serialize(),
      dataType: 'JSON',
      success: (res) => {
        console.log(res);

        showTable(res);
      },
    });

    const showTable = (res) => {
      let table = ``;

      res.length == 0
        ? (table = `<tr>
                        <td colspan="3">Tidak ada data yang dimasukkan</td>
                    </tr>`)
        : res.forEach((item, key) => {
            table += `<tr>
                        <td>${key + 1}</td>
                        <td>${key}</td>
                        <td>${item}</td>
                    </tr>`;
          });

      $('#tbody').html(table).hide().fadeTo(800, 0.8);
    };
  };
});
