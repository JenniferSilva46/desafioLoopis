import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

import { GrUserSettings } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import { BiLeftArrowAlt } from "react-icons/bi";
import sair from "../../assets/sair.svg";
import perfil from "../../assets/Profile.svg";

import "./styles.css";

function Profile() {
  return (
    <PageContainer>
      <header id="perfil-header">
        <div className="auth">
          <Link to="/" className="home-perfil">
            <BiLeftArrowAlt />
          </Link>
        </div>

        <img src={perfil} alt="Seu Artísta" />
      </header>
      <div id="edita-conta">
        <form id="form-perfil">
          <div className="confi-conta">
            <label>
              <GrUserSettings />
            </label>
            <input
              type="Button"
              value="Atualizar minha conta"
              name="arualizar"
            />
          </div>

          <div className="confi-conta">
            <label>
              <GoTrashcan />
            </label>
            <input type="Button" value="Deletar minha conta" name="deletar" />
          </div>

          <div className="confi-conta">
            <label>
              <img src={sair} alt="sair" />
            </label>
            <input type="Button" value="Sair" name="sair" />
          </div>
        </form>
      </div>
      <h1 id="title-perfil">Minha Conta</h1>

      <div id="linha-perfil"></div>

      <div id="perfil">
        <form id="form-conta">
          <input type="text" value="Nome" id="nome" />
          <div className="contact-perfil">
            <input type="email" value="Email" id="email" />
            <input type="text" value="Whatsapp" id="whatsapp" />
          </div>

          <div className="contact-perfil">
            <select name="select-genero" className="option">
              <option value="Gênero">Gênero</option>
              <option value="Feminino" selected>
                Feminino
              </option>
              <option value="Masculino">Masculino</option>
            </select>

            <select name="select-rede" className="option">
              <option value="Rede Social">Rede Social</option>
              <option value="Instagram" selected>
                Instagram
              </option>
              <option value="Youtube">Youtube</option>
              <option value="Website">Website</option>
            </select>
          </div>
          <textarea name="textarea" rows="5" cols="30">
            Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec tincidunt venenatis diam, quis facilisis odio dictum at.
            Vestibulum sit amet lacus eget leo fringilla laoreet. Curabitur
            tempor felis nec sem consequat, ac tempor quam pellentesque. Ut
            sagittis magna sed tortor tincidunt faucibus. Sed et ipsum sit amet
            justo fermentum scelerisque."
          </textarea>
          <div id="button-perfil">
            <input
              type="Button"
              value="Salvar"
              name="button"
              className="button-salvar"
            />
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default Profile;
