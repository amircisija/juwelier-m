<template>
  <section id="into__section">
    <b-container fluid>
      <b-row>
        <b-col class="col__1 col__inner">
          <div class="col__inner--box">
            <h3>Goldankauf</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis itaque quibusdam numquam omnis cumque nemo architecto voluptates laborum blanditiis culpa harum assumenda, in, vitae rem maiores, veniam facere perferendis velit.</p>
          </div>
        </b-col>
        <b-col class="col__2 col__inner">
          <div class="col__inner--box">
            <h3>Reparaturen</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis itaque quibusdam numquam omnis cumque nemo architecto voluptates laborum blanditiis culpa harum assumenda, in, vitae rem maiores, veniam facere perferendis velit.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
.col__1 {
  background: url("../assets/col_1.jpg") 50% 50% no-repeat;
  background-size: cover;
  min-height: 300px;
}
.col__2 {
  background: url("../assets/col_2.jpg") 50% 50% no-repeat;
  background-size: cover;
  min-height: 300px;
}
.col__inner {
  padding: 60px;
}
.col__inner--box {
  max-width: 400px;
}
</style>
