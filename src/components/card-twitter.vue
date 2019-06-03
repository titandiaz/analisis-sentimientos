<template>
  <div class="container">
  <div class="row">
    <div class="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
      <div class="panel panel-default bootcards-media">
        <div class="panel-body row">
          <div class="row">
            <div class="col-xs-2">
              <img id="logo" src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/twitter_card/images/logo.jpg?raw=true">
            </div>
            <div class="col-xs-10">
              <div class="row">
                <p id="title">
                  SitePoint <span class="inTitle">@sitepointdotcom &middot; 23h</span>
                </p>
              </div>
              <div class="row heading">
                <h5>Using Android Text-to-Speech to Create a Smart Assistant: </h5>
              </div>
            </div>
          </div>
          <div class="row body-card">
            <div class="col-xs-4">
              <img src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/twitter_card/images/sitepoint.png?raw=true">
            </div>
            <div class="col-xs-8">
              <h4>Using Android Text-to-Speech to Create a...</h4>
              <h5>Theodor Pandeli creates an Android app with text-to-speech that answers all of life's most important questions.</h5>
              <h5>sitepoint.com</h5>
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <p><i class="fa fa-reply" aria-hidden="true"></i></p>
          <p><i class="fa fa-retweet" aria-hidden="true"></i> 3</p>
          <p><i class="fa fa-heart" aria-hidden="true"></i> 4</p>
          <p><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.row {
  background-color: #fff;
}
#logo {
  width: 48px;
  height: 48px;
  margin: 3px -6px 0 6px;
}

.panel-body {
  padding-top: 5px;
  padding-bottom: 0px;
}

.body-card {
  border: 1px solid #E1E8ED;
  margin: 5px 20px 0 60px;
  border-radius: 5px;
}

.body-card > div {
  padding-left: 0px;
}

.body-card > div > h4,
h5 {
  margin: 6px 0;
}

.body-card div img {
  height: 123px;
  border-radius: 3px 0 0 3px;
}

.body-card .col-xs-8 h5:nth-child(3) {
  color: #8899A6;
}

.panel-footer {
  background-color: white;
  border-color: white;
  padding-bottom: 7px;
}

.panel-footer p {
  display: inline-block;
  margin: 0px 60px 5px 10px;
  color: #aab8c2;
}

.heading h5 {
  color: #292f33;
  font-size: 16px;
}

#title {
  margin-top: 1px;
  margin-bottom: 0px;
  font-weight: bold;
  color: #292f33;
}

.inTitle {
  color: #8899a6;
  font-size: 13px;
  font-weight: 200;
}

.panel-footer p:first-child:hover {
  color: #2389AE;
}

.panel-footer p:nth-child(2):hover {
  color: #19CF86;
}

.panel-footer p:nth-child(3):hover {
  color: #E81C4F;
}

.panel-footer p:nth-child(4):hover {
  color: #2389AE;
}

@media only screen and (max-width: 480px) {
  .body-card {
    margin: 0 10px 0 10px;
    height: 123px;
  }
  .body-card > .col-xs-4 {
    visibility: hidden;
    display: none;
  }
  .body-card > .col-xs-8 {
    width: 98%;
    margin-left: 3px;
  }
  .panel-body > .row:first-child > div {
    display: inline-block;
  }
  .panel-body > .row:first-child > .col-xs-10 {
    width: 70%;
  }
  .panel-footer > p {
    margin-right: 25px;
  }
  .fa-reply {
    margin-left: 3px !important;
  }
}

@media only screen and (max-width: 767px) {
  .panel-body > .row:first-child > .col-xs-2,
  .panel-footer > p.first-child > i {
    width: 75px;
  }
  .fa-reply {
    margin-left: 35px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .fa-reply {
    margin-left: 38px;
  }
}

@media only screen and (min-width: 1200px) {
  .panel-body > .row:first-child > .col-xs-2 {
    width: 13%;
  }
  .fa-reply {
    margin-left: 35px;
  }
}
</style>
