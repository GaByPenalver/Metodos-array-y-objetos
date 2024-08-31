document.write('<h1>ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA PARA RADIOLOGÍA</h1>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

//2. Eliminar el primer y último elemento del arreglo de Radiología

radiologia.shift();
radiologia.pop();


document.write(
    `<table border='1'>
    <tr><th colspan="5" style="text-align: center;">CONSULTAS RADIOLOGÍA</th></tr>
    <tr>
    <th>hora</th>
    <th>especialista</th>
    <th>paciente</th>
    <th>rut</th>
    <th>previsión</th>
    </tr>`
);


radiologia.forEach((consulta) => {
    document.write(`<tr>
        <td>${consulta.hora}</td>
        <td>${consulta.especialista}</td>
        <td>${consulta.paciente}</td>
        <td>${consulta.rut}</td>
        <td>${consulta.prevision}</td>
    </tr>`);
});

document.write("</table>");
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);

