drop database dbgenerico;
create database dbgenerico;
use dbgenerico;


create table usuarios (
	id int primary key DEFAULT (UUID_SHORT() MOD 1000000000),
	nome varchar(100) not null,
    email varchar(100) unique,
    senha varchar (255) not null,
    tipo enum('usuario', 'funcionario', 'adm') not null default 'usuario'
);

create table contatos( 
	id int auto_increment primary key,
    usuario_id int,
    contato_id int,
    apelido varchar(100),
    foreign key (contato_id) references usuarios(id),
    foreign key (usuario_id) references usuarios(id)
);


create table mensagens (
	id bigint auto_increment primary key,
    remetente_id int not null,
    destinatario_id int not null,
    conteudo TEXT not null,
    enviado_em timestamp default current_timestamp,
    foreign key (remetente_id) references usuarios(id),
    foreign key (destinatario_id) references usuarios(id)
);

insert into usuarios (nome, email, senha, tipo) 
values ("lalau", "lalau@gmail.com", "Lalau231", "usuario"),
("ramon", "ramon@gmail.com", "ramon123", "usuario"),
("davi", "davi@gmail.com", "DAVI123", "usuario");
select * from usuarios;

insert into contatos (contato_id, apelido, usuario_id)
values ('32274956', 'davizinho', '32274954'),
('32274956', 'Chaguinhas', '32274955'),
('32274956', 'EUU', '32274956');
select *from contatos;

select *from contatos where usuario_id = "659351566";

select * from contatos where contato_id = "659351571" and usuario_id = "659351569";


update contatos set contato_id = "659351571" where contato_id = "659351571" and usuario_id = "659351569";

delete from contatos where contato_id = "32274956" and usuario_id = "32274956";


SELECT 
    c.id,
    u.nome AS usuario_nome,
    u4.id AS usuario_id,
    u2.nome AS contato_nome,
    u3.id AS contato_id,
    c.apelido
FROM contatos c
JOIN usuarios u ON c.usuario_id = u.id
join usuarios u4 on c.usuario_id = u4.id
JOIN usuarios u2 ON c.contato_id = u2.id
join usuarios u3 on c.contato_id = u3.id;

