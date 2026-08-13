var R_Btn = document.getElementById("Omar_Selection_Cardholder_Btn_R");
var L_Btn = document.getElementById("Omar_Selection_Cardholder_Btn_L");
var Card_Area= document.getElementById("Omar_Selection_Cardholder");
var pos = 0;


R_Btn.addEventListener("click",function(){
    if((pos == 0)){
        pos = 1;
    Card_Area.innerHTML = `                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_13_m336239-0002_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Sky-Dweller</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 42 mm, white gold
$44,550</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_14_m126710grnr-0003_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">GMT-Master ||</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 40 mm, Oystersteel
$10,500</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_15_m126334-0033_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Datejust</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 41 mm, Oystersteel and
white gold
$9,750</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_16_m279135rbr-0001_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Lady-Datejust</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 28 mm, Everose gold
and diamonds
$45,200</pre></div>
                    </div>
                </div>`;}
                else if(pos == 1){
                    pos = 0;
    Card_Area.innerHTML = `                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_9_m127334-0001_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Land-Dweller</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 40 mm, Oystersteel and
white gold
$13,700</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_10_m128236-0018_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Day-Date</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 36 mm, platinum
$53,500</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_11_m126000-0012_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Oyster Perpetual</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 36 mm, Oystersteel
$5,600</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_12_m126613lb-0002_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Submariner</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 41 mm, Oystersteel and
yellow gold
$16,200</pre></div>
                    </div>
                </div>`;
                }
}

)

L_Btn.addEventListener("click",function(){
    if((pos == 0)){
        pos = 1;
    Card_Area.innerHTML = `                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_13_m336239-0002_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Sky-Dweller</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 42 mm, white gold
$44,550</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_14_m126710grnr-0003_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">GMT-Master ||</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 40 mm, Oystersteel
$10,500</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_15_m126334-0033_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Datejust</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 41 mm, Oystersteel and
white gold
$9,750</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_16_m279135rbr-0001_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Lady-Datejust</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 28 mm, Everose gold
and diamonds
$45,200</pre></div>
                    </div>
                </div>`;}
                else if(pos == 1){
                    pos = 0;
    Card_Area.innerHTML = `                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_9_m127334-0001_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Land-Dweller</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 40 mm, Oystersteel and
white gold
$13,700</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_10_m128236-0018_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Day-Date</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 36 mm, platinum
$53,500</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_11_m126000-0012_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Oyster Perpetual</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 36 mm, Oystersteel
$5,600</pre></div>
                    </div>
                </div>
                <div class="Omar_Selection_Card">
                    <div class="Omar_Selection_Card_Cover"></div>
                    <div class="Omar_Selection_Card_image"><img src="Bucherer-imgs/imgi_12_m126613lb-0002_FP.webp"></div>
                    <div class="Omar_Selection_Card_text">
                        <div class="Omar_Selection_Card_text_brand">Rolex</div>
                        <div class="Omar_Selection_Card_text_model">Submariner</div>
                        <div class="Omar_Selection_Card_text_info"><pre>Oyster 41 mm, Oystersteel and
yellow gold
$16,200</pre></div>
                    </div>
                </div>`;
                }
}

)






var Mena_R_Btn = document.getElementById("Mena_Btn_R")
var Mena_L_Btn = document.getElementById("Mena_Btn_L");
var Mena_Card_Area= document.getElementById("explore-grid");
var Mena_pos = 0;

console.log(Mena_R_Btn);
console.log(Mena_L_Btn);
console.log(Mena_Card_Area);


Mena_R_Btn.addEventListener("click",function(){
    if((Mena_pos == 0)){
        Mena_pos = 1;
    Mena_Card_Area.innerHTML = `    
    <!-- IMAGE 5: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_27_v7_category-rolex-watchmaking.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>

    <!-- IMAGE 6: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_28_v7_category-rolex-servicing.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_29_v7_category-rolex-history.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_30_v7_category-rolex-contact.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>`;}
                else if(Mena_pos == 1){
                    Mena_pos = 0;
    Mena_Card_Area.innerHTML = `    
    <!-- IMAGE 5: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_23_v7_category-rolex-at-bucherer.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>

    <!-- IMAGE 6: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_24_v7_category-rolex-watches.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_25_rolex-keep-exploring-new-watches-2026_m134303-0010_2601stj_0004-landscape_qdl3jf.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_26_rolex-accessories-cover-rolexcufflinks_2403jva_001-portrait.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>`;
                }
}

)


Mena_L_Btn.addEventListener("click",function(){
    if((Mena_pos == 0)){
        Mena_pos = 1;
    Mena_Card_Area.innerHTML = `    
    <!-- IMAGE 5: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_27_v7_category-rolex-watchmaking.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>

    <!-- IMAGE 6: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_28_v7_category-rolex-servicing.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_29_v7_category-rolex-history.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_30_v7_category-rolex-contact.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>`;}
                else if(Mena_pos == 1){
                    Mena_pos = 0;
    Mena_Card_Area.innerHTML = `    
    <!-- IMAGE 5: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_23_v7_category-rolex-at-bucherer.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>

    <!-- IMAGE 6: used once -->
    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_24_v7_category-rolex-watches.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_25_rolex-keep-exploring-new-watches-2026_m134303-0010_2601stj_0004-landscape_qdl3jf.jpg">
      <div>
        <h3>Rolex Collection</h3>
        <p>Discover the collection</p>
      </div>
    </article>

    <article class="Mena_explore-card">
      <img src="Bucherer-imgs/imgi_26_rolex-accessories-cover-rolexcufflinks_2403jva_001-portrait.jpg">
      <div>
        <h3>Rolex Datejust</h3>
        <p>Elegant and timeless</p>
      </div>
    </article>`;
                }
}

)