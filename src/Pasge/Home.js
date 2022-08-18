import '../Pasge/Home.css';
function Home() {
    return (
        <div class="container my-5   justify-content-center d-flex">
        <div class="row d-flex justify-content-center ">
            <div class="col">
              <div class="row mb-5"><div class="col-12"> <h3 class="font-weight-bold text-center"> Choose a social media to <span class="text-success"> Sign up </span></h3> </div></div>
              <div class="row ">
                  <div class="col px-sm-3 px-2"> <a href="http://localhost:3000/giao-dich-mua-IFC/"><img src="https://i.imgur.com/dP8GKUI.jpg" class="img-fluid" /></a>    </div>
                  <div class="col px-sm-3 px-2"><a href="http://localhost:3000/giao-dich-rut-IFC"><img src="https://i.imgur.com/qeDXyg3.jpg" class="img-fluid" /></a></div>
                  <div class="col px-sm-3 px-2"><a href="http://localhost:3000/giao-dich-rut-USDT/"><img src="https://i.imgur.com/6HeuTUE.jpg" class="img-fluid" /></a></div>
              </div>
              <div class="row second-row ">
                  <div class="col px-sm-3 px-2"> <a href="http://localhost:3000/TraToken-Nha-Dau-Tu"><img src="https://i.imgur.com/aezmrTa.jpg" class="img-fluid" /></a>    </div>
                  <div class="col px-sm-3 px-2"><a href="https://in.pinterest.com/bbbootstrap/"><img src="https://i.imgur.com/S8zTP1V.jpg"  class="img-fluid" /></a></div>
                  <div class="col px-sm-3 px-2"> <a href="https://twitter.com/bbbootstrap"><img src="https://i.imgur.com/sJINfpF.jpg" class="img-fluid" /></a>    </div>
              </div>
            </div>
        </div>
        
      </div>
      
    )
}
export default Home;