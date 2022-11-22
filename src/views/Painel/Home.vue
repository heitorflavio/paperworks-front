<template>
  <div>
    <Navbar />
    <div class="sidebar-mini layout-fixed sidebar-open">
      <div class="wrapper">
        <section class="content">
          <div class="container-fluid">
            <div class="content-wrapper">
              <!-- Content Header (Page header) -->
              <div class="content-header">
                <div class="container-fluid">
                  <div class="row">
                    <div></div>
                  </div>
                  <!-- /.row -->
                </div>
                <!--  -->
                <div class="tabela">
                  <div class="col-14">
                    <div class="card">
                      <div class="card">
                        <div class="card-header border-transparent">
                          <h3 class="card-title">Produtos</h3>
                        </div>

                        <div class="card-body p-0">
                          <div class="table-responsive">
                            <table class="table m-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>NOME</th>
                                  <th>DESCRIÇÂO</th>
                                  <th>PREÇO</th>
                                  <th>DATA CADASTRO</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="produto in produtos"
                                  :key="produto.id"
                                >
                                  <td>
                                    <button
                                      @click="getProduto(produto.id)"
                                      type="button"
                                      class="btn btn-light"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      {{ produto.id }}
                                    </button>
                                  </td>
                                  <td>{{ produto.nome }}</td>
                                  <td>{{ produto.descricao }}</td>
                                  <td>
                                    {{ produto.preco | currency }}
                                  </td>
                                  <td>
                                    <span>{{
                                      moment(produto.created_at)
                                    }}</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div class="card-footer clearfix">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#Modal2"
                            id="btn_fast"
                            type="button"
                            class="btn btn-primary btn-sm float-right pt-0 pb-0"
                          >
                            <span class="label"> Cadastro Rápido ⚡ </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- Modal1  -->
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Produto {{ id2 }}
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div>
                              <b-card no-body>
                                <b-tabs card>
                                  <b-tab title="Produto" active>
                                    <b-card-text>
                                      <form
                                        @submit.prevent=""
                                        class="row g-3 needs-validation"
                                      >
                                        <div class="modal-body">
                                          <div
                                            v-if="msg"
                                            class="
                                              alert alert-success
                                              d-flex
                                              justify-content-center
                                            "
                                            role="alert"
                                          >
                                            {{ msg }}
                                          </div>
                                          <div
                                            v-if="err"
                                            class="
                                              alert alert-danger
                                              d-flex
                                              justify-content-center
                                            "
                                            role="alert"
                                          >
                                            {{ err }}
                                          </div>
                                          <!-- content modal -->
                                          <div class="row">
                                            <div class="col-md-6">
                                              <div class="form-group">
                                                <label for="nome" class="label"
                                                  >Nome</label
                                                >
                                                <input
                                                  type="text"
                                                  class="
                                                    form-control form-control-sm
                                                  "
                                                  id="nome"
                                                  :required="true"
                                                  placeholder="Digite o nome"
                                                  v-model="nome2"
                                                />
                                              </div>
                                            </div>
                                            <div class="col-md-6">
                                              <div class="form-group">
                                                <label
                                                  for="titulo"
                                                  class="label"
                                                  >Titulo</label
                                                >
                                                <input
                                                  type="text"
                                                  class="
                                                    form-control form-control-sm
                                                  "
                                                  id="titulo"
                                                  :required="true"
                                                  placeholder="Digite o Titulo"
                                                  v-model="titulo2"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-md-12">
                                              <div class="form-group">
                                                <label
                                                  for="imagem"
                                                  class="label"
                                                  >Link Imagem Principal</label
                                                >
                                                <input
                                                  type="text"
                                                  class="
                                                    form-control form-control-sm
                                                  "
                                                  id="imagem"
                                                  placeholder="Digite aqui o link da imagem principal"
                                                  v-model="img2"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-md-6">
                                              <div class="form-group">
                                                <label for="preco" class="label"
                                                  >Preço</label
                                                >
                                                <input
                                                  type="text"
                                                  class="
                                                    form-control form-control-sm
                                                  "
                                                  id="preco"
                                                  placeholder="Digite o Preço"
                                                  v-model="preco2"
                                                />
                                              </div>
                                            </div>
                                            <div class="col-md-6">
                                              <div class="form-group">
                                                <label for="preco" class="label"
                                                  >Marca</label
                                                >
                                                <input
                                                  type="text"
                                                  class="
                                                    form-control form-control-sm
                                                  "
                                                  id="marca"
                                                  placeholder="Digite o nome da marca"
                                                  v-model="marca2"
                                                />
                                              </div>
                                            </div>
                                            <div class="form-group">
                                              <label
                                                for="description"
                                                class="label"
                                                >Descrição</label
                                              >
                                              <div
                                                class="
                                                  input-group input-group-sm
                                                "
                                              >
                                                <textarea
                                                  type="text"
                                                  class="form-control"
                                                  id="description"
                                                  :required="true"
                                                  placeholder="Digite a Descriçãp"
                                                  v-model="description2"
                                                >
                                                </textarea>
                                              </div>
                                            </div>
                                          </div>
                                          <!-- content end -->
                                        </div>
                                      </form>
                                    </b-card-text>
                                  </b-tab>
                                  <b-tab title="Imagens">
                                    <b-card-text>
                                      <div>
                                        <table class="table m-0">
                                          <thead>
                                            <tr>
                                              <th>ID</th>
                                              <th>Link</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr
                                              v-for="image in imagens"
                                              :key="image.id"
                                            >
                                              <td>
                                                <button
                                                  @click="getProduto(image.id)"
                                                  type="button"
                                                  class="btn btn-light"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#exampleModal"
                                                  disabled
                                                >
                                                  {{ image.id }}
                                                </button>
                                              </td>
                                              <td><p class="description">{{ image.link }}</p></td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <button
                                                  class="btn btn-primary"
                                                  @click="Newimage(id2)"
                                                >
                                                  +
                                                </button>
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  v-model="NewimageNome"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </b-card-text>
                                  </b-tab>
                                </b-tabs>
                                <button
                                  v-if="status"
                                  class="btn btn-warning"
                                  @click="Excluir(id2)"
                                >
                                  Inativar
                                </button>
                                <button
                                  v-else
                                  class="btn btn-success"
                                  @click="Ativar(id2)"
                                >
                                  Ativar
                                </button>
                              </b-card>
                            </div>
                          </div>
                          <div class="modal-footer">               
                            <button
                              @click="Update(id2)"
                              type="button"
                              class="btn btn-primary"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- {{poup2}} -->
                    <div
                      class="modal fade"
                      id="Modal2"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <form
                            @submit.prevent=""
                            class="row g-3 needs-validation"
                          >
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Cadastrar
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div
                                v-if="msg"
                                class="
                                  alert alert-success
                                  d-flex
                                  justify-content-center
                                "
                                role="alert"
                              >
                                {{ msg }}
                              </div>
                              <div
                                v-if="err"
                                class="
                                  alert alert-danger
                                  d-flex
                                  justify-content-center
                                "
                                role="alert"
                              >
                                {{ err }}
                              </div>
                              <!-- content modal -->
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="nome" class="label">Nome</label>
                                    <input
                                      type="text"
                                      class="form-control form-control-sm"
                                      id="nome"
                                      :required="true"
                                      placeholder="Digite o nome"
                                      v-model="nome"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="titulo" class="label"
                                      >Titulo</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control form-control-sm"
                                      id="titulo"
                                      :required="true"
                                      placeholder="Digite o Titulo"
                                      v-model="titulo"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="imagem" class="label"
                                      >Link Imagem Principal</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control form-control-sm"
                                      id="imagem"
                                      placeholder="Digite aqui o link da imagem principal"
                                      v-model="img"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="preco" class="label"
                                      >Preço</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control form-control-sm"
                                      id="preco"
                                      placeholder="Digite o Preço"
                                      v-model="preco"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="preco" class="label"
                                      >Marca</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control form-control-sm"
                                      id="marca"
                                      placeholder="Digite o nome da marca"
                                      v-model="marca"
                                    />
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label for="description" class="label"
                                    >Descrição</label
                                  >
                                  <div class="input-group input-group-sm">
                                    <textarea
                                      type="text"
                                      class="form-control"
                                      id="description"
                                      :required="true"
                                      placeholder="Digite a Descriçãp"
                                      v-model="description"
                                    >
                                    </textarea>
                                  </div>
                                </div>
                              </div>
                              <!-- content end -->
                            </div>
                            <div class="modal-footer">
                              <button
                                type="submit"
                                class="btn btn-primary"
                                @click="Cadastro()"
                              >
                                Save changes
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import Navbar from "./Navbar.vue";
export default {
  name: "HomePainel",
  components: {
    Navbar,
  },
  data() {
    return {
      produtos: [],
      nome: "",
      marca: "",
      preco: "",
      titulo: "",
      description: "",
      img: "",
      msg: "",
      err: "",
      nome2: "",
      marca2: "",
      preco2: "",
      titulo2: "",
      description2: "",
      img2: "",
      id2: "",
      imagens: [],
      NewimageNome: "",
      status: "",
    };
  },
  filters: {
    // Mascara de Preço
    currency(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    // Função para listar produtos na api
    getProdutos() {
      axios.get(`${this.$store.state.base_url}produtos`).then((response) => {
        this.produtos = response.data;
      });
    },
    // Função para converter formado de data do javascript para o formato BR
    moment: function (date) {
      moment.locale("pt-br");
      return moment(date).format("DD/MM/YYYY HH:mm");
    },
    getImagens(id) {
      axios
        .get(`${this.$store.state.base_url}imagens/` + id)
        .then((response) => {
          this.imagens = response.data;
        });
    },
    // Função para criar Imagem
    Newimage(id) {
      axios
        .post(`${this.$store.state.base_url}imagens/`, {
          produto_id: id,
          link: this.NewimageNome,
        })
        .then((response) => {
          console.log(response);
          this.getImagens(id);
        });
    },
    // Função para buscar um produto espercifico
    getProduto(id) {
      this.getImagens(id);
      axios
        .get(`${this.$store.state.base_url}produtos/` + id)
        .then((response) => {
          this.id2 = response.data.id;
          this.nome2 = response.data.nome;
          this.marca2 = response.data.marca;
          this.preco2 = response.data.preco;
          this.description2 = response.data.descricao;
          this.titulo2 = response.data.titulo;
          this.img2 = response.data.img;
          this.status = response.data.status;
        });
    },
    // função para cria imagem para um produto espercifico (ID)
    createImage(id) {
      axios
        .post(`${this.$store.state.base_url}imagens`, {
          produto_id: id,
          link: this.img,
        })
        .then((response) => {
          this.produtos = response.data;
        });
    },
    // Função para atualizar dados do produto
    Update(id) {
      axios
        .put(`${this.$store.state.base_url}produtos/` + id, {
          nome: this.nome2,
          titulo: this.titulo2,
          marca: this.marca2,
          preco: this.preco2,
          img: this.img2,
          descricao: this.description2,
        })
        .then((response) => {
          this.produtos = response.data;
          this.msg = "Cadastrado com sucesso!!";
          this.getProdutos();
        })
        .catch((error) => {
          console.log(error);
          this.err = error;
        });
    },
    // Funcão para Inativar Produto
    Excluir(id) {
      this.msg = "";
      axios
        .delete(`${this.$store.state.base_url}produtos/status/` + id, {})
        .then((response) => {
          // this.produtos = response.data;
          console.log(response);
          this.msg = "Inativado com sucesso!!";

          this.getProduto(this.id2);
        })
        .catch((error) => {
          console.log(error);
          this.err = error;
        });
    },
    // Funcão para Ativar Produto
    Ativar(id) {
      this.msg = "";
      axios
        .post(`${this.$store.state.base_url}produtos/status/` + id, {})
        .then((response) => {
          // this.produtos = response.data;
          console.log(response);
          this.msg = "Ativado com sucesso!!";
          this.getProduto(this.id2);
        })
        .catch((error) => {
          console.log(error);
          this.err = error;
        });
    },
    // Função para cadastrar um novo produto
    Cadastro() {
      this.msg = "";
      axios
        .post(`${this.$store.state.base_url}produtos`, {
          nome: this.nome,
          titulo: this.titulo,
          marca: this.marca,
          preco: this.preco,
          img: this.img,
          descricao: this.description,
        })
        .then((response) => {
          this.createImage(response.data.id);
          this.produtos = response.data;
          this.msg = "Cadastrado com sucesso!!";
          this.getProdutos();
        })
        .catch((error) => {
          console.log(error);
          this.err = error;
        });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style>
.form-group {
  margin: 5px;
}
.tabela {
  margin-top: 40px;
}
.description {
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
  color: rgb(66, 70, 77);
}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>