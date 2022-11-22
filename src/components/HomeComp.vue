<template>
  <div>
    <section class="produtos-container">
      <transition mode="out-in">
        <div v-if="produtos && produtos.length" class="produtos" key="produtos">
          <!-- Button trigger modal -->
          <div
            @click="read(produto.id)"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="produto"
            v-for="produto in produtos"
            :key="produto.id"
          >
            <img class="img" v-if="produto.img" :src="produto.img" />
            <p class="preco">{{ produto.preco | numeroPreco }}</p>
            <h2 class="titulo">{{ produto.nome }}</h2>
            <p>{{ produto.titulo }}</p>
          </div>
        </div>
        <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
          <p class="sem-resultados">
            Busca sem resultados. Tente buscar outro termo.
          </p>
        </div>
      </transition>
    </section>
    <!-- Modal -->
    <div>
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {{ title }}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style="padding: 50px">
              <!-- content -->
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    style="padding: auto"
                    v-for="img in imagens"
                    :key="img.id"
                    :img-src="img.link"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
            <!-- end -->
            <!--  -->
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Descrição
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Ficha Técnica
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <p style="padding: 30px">{{ desc }}</p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Marca</th>
                      <td>{{ marca }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="nav-disabled"
                role="tabpanel"
                aria-labelledby="nav-disabled-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeComp",
  data() {
    return {
      produtos: [],
      modal: [],
      imagens: [],
      slide: 0,
      sliding: "",
      desc: "",
      title: "",
      marca: "",
    };
  },
  filters: {
    numeroPreco(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    getProdutos() {
      axios
        .get(this.$store.state.base_url + "produtos/cliente")
        .then((response) => {
          this.produtos = response.data;
          console.log(this.produtos);
        });
    },
    read(id) {
      console.log(id);
      axios
        .get(this.$store.state.base_url + "produtos/" + id)
        .then((response) => {
          this.modal = response.data;
          this.desc = this.modal.descricao;
          this.title = this.modal.titulo;
          this.marca = this.modal.marca;
          this.getimg(id);
          console.log(response);
        });
    },
    getimg(id) {
      axios
        .get(this.$store.state.base_url + "imagens/" + id)
        .then((response) => {
          this.imagens = response.data;
          console.log(response);
        });
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  object-fit: cover;
}
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  margin-top: 60px;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

@media screen and (max-width: 500px) {
  .produtos {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin: 10px;
  }
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>