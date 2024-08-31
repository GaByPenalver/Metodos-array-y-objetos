document.write('<h1>ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA PARA DENTAL</h1>');

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


//3. Imprimir la lista de consultas médicas de Dental separando por un gión cada dato desplegado y cada fila de información debe estar separada por un párrafo

document.write('<p><strong>CONSULTAS DENTAL</strong></p>');

dental.forEach((consulta) => {
    document.write(
        `<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`
    );
});

document.write("</table>");

document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);




//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental 

let consultaDental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

let pacientesIsapre = consultaDental.filter(consulta => consulta.prevision === 'ISAPRE');


document.write(`
    </table>
    <p><strong>CONSULTAS DENTAL CON PREVISIÓN ISAPRE</strong></p>
    <table border="1">
        <tr>
            <th>paciente</th>
            <th>previsión</th>
        </tr>
`);

pacientesIsapre.forEach((consulta) => {
    document.write(`<tr>
        <td>${consulta.paciente}</td>
        <td>${consulta.prevision}</td>
    </tr>`);
});

document.write("</table>");
document.write(`<p>Cantidad de atenciones para Isapre: ${pacientesIsapre.length}</p>`);