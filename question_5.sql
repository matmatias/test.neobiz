SELECT V.placa, V.cidade 
FROM Veiculo as V 
JOIN Representate_legal as R 
ON V.representante_legal_id = R.id
WHERE R.nome = "Joaquim Silva"