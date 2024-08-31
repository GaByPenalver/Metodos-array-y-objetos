document.write('<h1>ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA PARA TRAUMATOLOGÍA</h1>');

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];


//1. Agregar las siguientes horas al arreglo de Traumatología

traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
);

traumatologia.sort((a, b) => {
    let horaA = parseInt(a.hora.replace(':', ''));
    let horaB = parseInt(b.hora.replace(':', ''));
    return horaA - horaB;
});

document.write(
    `<table border='1'>
    <tr><th colspan="5" style="text-align: center;">CONSULTAS TRAUMATOLOGÍA</th></tr>
    <tr>
    <th>hora</th>
    <th>especialista</th>
    <th>paciente</th>
    <th>rut</th>
    <th>previsión</th>
    </tr>`
);


traumatologia.forEach((consulta) => {
    document.write(`<tr>
        <td>${consulta.hora}</td>
        <td>${consulta.especialista}</td>
        <td>${consulta.paciente}</td>
        <td>${consulta.rut}</td>
        <td>${consulta.prevision}</td>
    </tr>`);
});
document.write("</table>");
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);





//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología 

let consultaTraumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];








let pacientesFonasa = consultaTraumatologia.filter (consulta => consulta.prevision === 'FONASA');

document.write(`
    </table>
    <p><strong>CONSULTAS TRAUMATOLOGÍA CON PREVISIÓN FONASA</strong></p>
    <table border="1">
        <tr>
            <th>paciente</th>
            <th>previsión</th>
        </tr>
`);


pacientesFonasa.forEach((consulta) => {
    document.write(`<tr>
        <td>${consulta.paciente}</td>
        <td>${consulta.prevision}</td>
    </tr>`);
});




document.write("</table>");
document.write(`<p>Cantidad de atenciones para Fonasa: ${pacientesFonasa.length}</p>`);


















