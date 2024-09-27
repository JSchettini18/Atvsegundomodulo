import React, { useState } from 'react';


const FormularioCadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        genero: '',
        termos: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        // Aqui você pode enviar os dados para um servidor ou realizar outra ação
    };

    return (
        <div>
            <h2>Formulário de Cadastro</h2>
            <form onSubmit={handleSubmit} className="form-vertical">
                {/* Campo de Nome */}
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Campo de E-mail */}
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Campo de Senha */}
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Campo de Telefone */}
                <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        pattern="[0-9]{10,15}"
                        placeholder="Digite seu telefone"
                    />
                </div>

                {/* Campo de Gênero */}
                <div className="form-group">
                    <label htmlFor="genero">Gênero:</label>
                    <select
                        id="genero"
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                {/* Checkbox de Aceitação de Termos */}
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="termos"
                            checked={formData.termos}
                            onChange={handleChange}
                        />
                        Aceito os termos e condições
                    </label>
                </div>

                {/* Botão de Enviar */}
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default FormularioCadastro;
