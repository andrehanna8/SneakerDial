// https://webkit.org/blog-files/3d-transforms/morphing-cubes.html
const jordan_list = [ 
    [{
      "Name": "Jordan 1 Retro High OG Chicago Lost and Found",
      "Style-Code": "DZ5485-612",
      "Retail-Price": "$180",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/963/037/original/920714_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "11/19/2022",
      "Product-Description": "The original Air Jordan 1 Chicago colorway was first introduced in 1985 and has only been retroed a few times since. But 2022 is the year that the colorway returns with an added vintage look. Pre-yellowed accents and cracked leather uppers showcase a fabricated look of age and wear. The Air Jordan 1 Lost and Found Chicago released in November of 2022 for $180.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-chicago-reimagined-lost-and-found",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-dz5485-612",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Taxi",
      "Style-Code": "555088-711",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/250/448/original/931515_01.jpg.jpeg?action=crop&width=2000",
      "Release-Date": "9/24/2022",
      "Product-Description": "The Air Jordan 1 Retro High OG Yellow Toe brings back the distinct color blocking as well as the sneaker´s high silhouette.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-yellow-toe",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-yellow-toe-555088-711",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Bordeaux",
      "Style-Code": "555088-611",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/063/041/873/original/794574_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "11/20/2021",
      "Product-Description": "The Air Jordan 1 Retro High OG ‘Bordeaux’ dresses the archetypal silhouette in a white leather upper with vinous leather overlays at the forefoot, heel and collar. Similar to the CO.JP ‘Midnight Navy’ colorway, the sneaker is accented with a metallic silver Swoosh and a jeweled Wings logo on the lateral ankle. A woven Nike Air tongue tag atop the lightly padded nylon tongue delivers an OG touch. A traditional two-tone AJ1 cupsole packs encapsulated Nike Air cushioning under the heel.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-bordeaux",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-bordeaux-555088-611",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Seafoam (W)",
      "Style-Code": "CD0461-002",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/444/198/original/765238_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "8/12/2021",
      "Product-Description": "The women's Air Jordan 1 High Seafoam (W) arrives in a smooth white leather construction with Seafoam Durabuck overlays and Swooshes. On the laces, crisp bronze trimming stands out against the design's subtle coloration. The women's Air Jordan 1 High Seafoam (W) released in August of 2021 and retailed for $170.",
      "StockX-link": "https://stockx.com/air-jordan-1-high-og-seafoam-w",
      "GOAT-link": "https://www.goat.com/sneakers/wmns-air-jordan-1-retro-high-og-seafoam-cd0461-002",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Brotherhood",
      "Style-Code": "555088-706",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/067/813/672/original/834449_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "2/24/2022",
      "Product-Description": "Jordan Brand honored Michael Jordan's time as a member of one of the most historic African American college fraternities with the Air Jordan 1 High Brotherhood. Drawing inspiration from the Omega Psi Phi crest, the Air Jordan 1 High Brotherhood arrives with a vibrant University Gold, purple, and white leather construction. Its color blocking is simple and bold, similar to past Jordan 1 releases like the Shattered Backboards and Bred Toes. In retro fashion, a woven Nike tongue label and Wings logo at the collar complete the design.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-brotherhood",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-high-retro-og-brotherhood-555088-706",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Stealth",
      "Style-Code": "555088-037",
      "Retail-Price": "$180",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/570/237/original/946681_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "8/30/2022",
      "Product-Description": "The Air Jordan 1 Retro High OG Stealth, featuring a stealth and white color scheme, is one of the Air Jordan 1’s celebrated versions. These Retro High OG Stealth sneakers feature a stealth grey hue on the laces, overlays, leather tongue labels, Swooshes, and on the outsole too. The white colorway is dominant on the shoe’s goat leather base. This Air Jordan 1 has a perforated toe box to allow aeration. Also, its outsole is patterned to increase traction.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-stealth",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-stealth-555088-037",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Heritage",
      "Style-Code": "555088-161",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/682/107/original/898959_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "5/25/2022",
      "Product-Description": "The Air Jordan 1 Retro High OG Heritage flips the original Chicago colorway for a bold, unique look. It features a white and University Red smooth leather upper with black leather collars and red Swooshes. From there, a black and red woven Nike tongue label and an Air sole at the base completes the design.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-heritage",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-heritage-555088-161",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Rebellionaire",
      "Style-Code": "555088-036",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/236/750/original/838649_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "3/12/2022",
      "Product-Description": "The Air Jordan 1 Retro High Rebellionaire draws inspiration from the original Air Jordan 1 Shadow with its simple black and grey color blocked upper. Printed on the leather construction, graffiti style text covers the upper. At the base, a white and grey Air sole completes the design.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-rebellionaire",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-high-og-rebellionaire-555088-036",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Laney",
      "Style-Code": "555088-707",
      "Retail-Price": "$140",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/000/020/979/original/555088_707.png.png?action=crop&width=900",
      "Release-Date": "11/16/2013",
      "Product-Description": "Set to release in February as a women’s exclusive release, the Air Jordan 1 Retro High OG “Laney” sees a full leather upper construction, Touches of red on the tongue label and hang-tag offer an unforeseen contrast, as does the light-blue shade on the hang-tag.",
      "StockX-link": "https://stockx.com/jordan-1-og-laney",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-laney-555088-707",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Defiant Couture",
      "Style-Code": "BQ6682-006",
      "Retail-Price": "$175",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/304/900/original/494663_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "2/23/2019",
      "Product-Description": "Add some new kicks to your couture swag and grab the Jordan 1 Retro High OG Defiant Couture. This AJ 1 sports a black upper with red accents, black Nike \"Swoosh\", white midsole, and a white sole. These sneakers released in February 2019 and retailed for $175.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-defiant-couture",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-defiant-bq6682-006",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Atmosphere (W)",
      "Style-Code": "DD9335-641",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/063/954/120/original/709706_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "12/22/2021",
      "Product-Description": "The women's Air Jordan 1 High Atmosphere follows the classic Black Toe color blocking format with a white and dark navy leather upper. Light pink patent leather on the ankle and vamp nods to the pink bubblegum that Michael Jordan chewed throughout his time on the hardwood. Woven Nike tongue labels and a signature Jordan Wings logo draw inspiration from the original 1985 Jordan 1 design.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-atmosphere-w",
      "GOAT-link": "https://www.goat.com/sneakers/wmns-air-jordan-1-retro-high-og-se-atmosphere-dd9335-641",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Heirloom",
      "Style-Code": "555088-202",
      "Retail-Price": "$170",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/544/502/original/948925_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "9/17/2022",
      "Product-Description": "The Air Jordan 1 Retro High OG Heirloom is a revamped Heirloom version of the iconic Air Jordan One High OG. This sneaker’s upper, constructed out of leather, features a black denim base, vachetta tan overlays and Swoosh, and black laces and nylon tongue. Branding-wise, this sneaker features an embossed Wings logo on the lateral flap and black Nike branding at the top of the nylon tongue. The upper of this shoe is supported by a white midsole and a tan rubber outsole with patterns to increase the shoe’s grip.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-heirloom",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-heirloom-555088-202",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG Starfish (W)",
      "Style-Code": "DO9369-101",
      "Retail-Price": "$180",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/974/583/original/939977_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "10/27/2022",
      "Product-Description": "The leather upper of the Air Jordan 1 Retro High OG Starfish W features a white base, contrasting orange overlays, and a high-cut collar in chocolate brown. This women's Air Jordan 1 OG Starfish also boasts a woven Nike Air tag embellishing a lightly padded nylon tongue in a vintage off-white finish. The aged aesthetic is repeated on the rubber midsole of the sneaker, fitted with an encapsulated Air-sole unit in the heel and supported underfoot by an orange rubber outsole.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-starfish-w",
      "GOAT-link": "https://www.goat.com/sneakers/wmns-air-jordan-1-high-og-starfish-do9369-101",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG SP Travis Scott",
      "Style-Code": "CD4487-100",
      "Retail-Price": "$175",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/299/630/original/488879_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "5/11/2019",
      "Product-Description": "The first release as part of Travis Scott's monumental partnership with Nike, the Air Jordan 1 Travis Scott breaks the conventional rules of the Air Jordan 1 design. For starters, the side Swooshes are reversed, which each tailing facing the toe. Woven tongue tags are shifted and stitched to the side of the tongue instead of the top. Also, in the collar, there is a hidden stash pocket. A one-of-a-kind design fit for a one-of-a-kind artist. The Air Jordan 1 Travis Scott features a white leather upper with Mocha suede overlays and black leather reversed Swooshes. Hits of red on the tongue slightly contrast the design's earth tones. On the heel, a debossed Cactus Jack logo adds a custom feel. From there, a yellowed midsole and matching Mocha outsole complete the design.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-travis-scott",
      "GOAT-link": "https://www.goat.com/sneakers/travis-scott-x-air-jordan-1-retro-high-og-cd4487-100",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG SP Fragment x Travis Scott",
      "Style-Code": "DH3227-105",
      "Retail-Price": "$200",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/281/096/original/784483_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "7/29/2021",
      "Product-Description": "The Air Jordan 1 High OG SP Fragment Design x Travis Scott fragment draws inspiration from a Jordan 1 Royal press sample from 1985 with its white and blue tumbled leather upper. Similar to previous Travis Scott Jordan 1s, signature reverse Swooshes and hidden stash pockets in the collar add on to the classic design. From there, both Travis Scott's Cactus Jack and Fragment logos are debossed in black on the heel wrap.",
      "StockX-link": "https://stockx.com/air-jordan-1-high-og-sp-fragment-design-x-travis-scott",
      "GOAT-link": "https://www.goat.com/sneakers/fragment-design-x-travis-scott-x-air-jordan-1-retro-high-dh3227-105",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro Low OG SP Travis Scott",
      "Style-Code": "CQ4277-001",
      "Retail-Price": "$130",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/325/277/original/522750_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "7/20/2019",
      "Product-Description": "Building off the success of their previous collaborations, Travis Scott adds yet another new design to his collaborative relationship with Jumpman via the Air Jordan 1 Low Travis Scott, now available on StockX. Travis teased the release of this shoe while on his Astroworld tour, leaving fans of both his music and the Jordan Brand alike with one question: When are these shoes dropping? On the Friday night of July 19, 2019, Travis answered the masses by making them available on his website, with a release on the SNKRS app following the next day.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-low-travis-scott",
      "GOAT-link": "https://www.goat.com/sneakers/travis-scott-x-air-jordan-1-low-mocha-cq4277-001",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Low Fragment x Travis Scott",
      "Style-Code": "DM7866-140",
      "Retail-Price": "$150",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/084/576/original/767449_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "8/13/2021",
      "Product-Description": "The Air Jordan 1 Low Fragment Design x Travis Scott nods to the original 2016 Air Jordan 1 Fragment with its simple color blocking. It features a smooth white leather upper with black and royal blue leather overlays. From there, a signature reversed Swoosh and yellowed soles add a Cactus Jack flair to the classic silhouette.",
      "StockX-link": "https://stockx.com/air-jordan-1-low-fragment-design-x-travis-scott",
      "GOAT-link": "https://www.goat.com/sneakers/fragment-design-x-travis-scott-x-air-jordan-1-retro-low-dm7866-140",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High Fragment",
      "Style-Code": "716371-040",
      "Retail-Price": "$185",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/929/635/original/14957_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "12/27/2014",
      "Product-Description": "The Nike Fragment Design x Air Jordan 1 Retro High OG is the first collaboration between Hiroshi Fujiwara's Fragment Design and Brand Jordan. One of the most coveted Air Jordan 1 colorways ever created, the design combines the OG black-toe color blocking with royal blue accents. Released in limited quantities in December 2014, the design also includes Nike Air branding on the tongue and a Fragment Design logo at the heel.",
      "StockX-link": "https://stockx.com/jordan-1-retro-fragment",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-fragment-716371-040",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG SP Utility Stash",
      "Style-Code": "DN4336-001",
      "Retail-Price": "$175",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/037/184/original/932629_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "5/3/2022",
      "Product-Description": "The Air Jordan 1 High Utility Stash takes a unique approach, featuring a shimmering black canvas upper with side cargo pockets and bright orange pulleys. At the heel, a removable cargo pocket with a zipper enclosure gives wearers an opportunity for customization.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-sp-utility-stash",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-high-og-stash-dn4336-001",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High Utility Pack (W)",
      "Style-Code": "AV3724-200",
      "Retail-Price": "$145",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/015/103/613/original/AV3724_200.png.png?action=crop&width=2000",
      "Release-Date": "11/1/2018",
      "Product-Description": "The women’s Air Jordan 1 Retro ‘Utility Pack’ gives the classic basketball sneaker a winterized makeup, equipping the upper with a combination of brown hues on the leather and buck paneling. Contrasting yellow accents emerge on the toe, tongue and ankle, while the quarter panel is also layered with a Sherpa fleece application.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-utility-pack-w",
      "GOAT-link": "https://www.goat.com/sneakers/wmns-air-jordan-1-retro-utility-pack-av3724-200",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 High Zoom Air CMFT Lemon Twist (W)",
      "Style-Code": "CT0979-200",
      "Retail-Price": "$140",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/096/633/original/790568_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "8/7/2021",
      "Product-Description": "Starting at the top of the shoe is a yellow “Zoom Air” tongue tag, complemented by Jordan Brand’s winged “Air Jordan” logo on the upper ankle. Most of the shoe’s uppers are constructed in suede, except for the ankle collars, the cutout Swoosh at the sidewalls and the mesh toebox. As a final touch, the sneaker sports a crisp white midsole, underscored by a thin fluorescent outsole.",
      "StockX-link": "https://stockx.com/air-jordan-1-high-zoom-cmft-lemon-twist-w",
      "GOAT-link": "https://www.goat.com/sneakers/wmns-air-jordan-1-high-zoom-comfort-lemon-twist-ct0979-200",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High Bloodline",
      "Style-Code": "555088-062",
      "Retail-Price": "$160",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/484/523/original/508079_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "11/29/2019",
      "Product-Description": "Jordan Brand pays homage to where the legacy began with the Jordan 1 Retro High Bloodline, now available on StockX. Reminiscent of the Black Toe, this model sports black and red to pay tribute to the Chicago Bulls.  This Jordan 1 features a white leather upper with black overlays and a red trimming that matches the laces and outsole. \"Nike Air\" tongues and \"Who Said Man Was Not Meant To Fly\" printed on the insoles completes the design. These sneakers released in November of 2019 and retailed for $160.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-bloodline",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-high-retro-og-bred-2019-555088-062",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 High Element Gore-Tex Light Bone",
      "Style-Code": "DB2889-100",
      "Retail-Price": "$200",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/064/377/234/original/760011_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "12/16/2021",
      "Product-Description": "The Air Jordan 1 Element GORE-TEX Light Bone features a moisture-wicking GORE-TEX upper with tonal grey Durabuck and leather overlays. From there, 3M Swooshes, Jordan Wings logos, and GORE-TEX branding are reminiscent of reflective detailing on element-proof jackets.",
      "StockX-link": "https://stockx.com/air-jordan-1-high-element-gore-tex-light-bone",
      "GOAT-link": "https://www.goat.com/sneakers/air-jordan-1-high-element-gore-tex-light-bone-db2889-100",
      "StadiumGoods-link": ""
    },
    {
      "Name": "Jordan 1 Retro High OG A Ma Maniére",
      "Style-Code": "DO7097-100",
      "Retail-Price": "$200",
      "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/724/040/original/808985_01.jpg.jpeg?action=crop&width=900",
      "Release-Date": "12/3/2021",
      "Product-Description": "The Air Jordan 1 A Ma Maniére features a premium cracked leather upper with burgundy reptilian-textural leather collars and Swooshes. Silky quilted lining and custom woven tongue and insole labels add a sense of luxury. At the base, a yellowed sole provides a vintage feel to complete the design.",
      "StockX-link": "https://stockx.com/air-jordan-1-retro-high-og-a-ma-maniere",
      "GOAT-link": "https://www.goat.com/sneakers/a-ma-maniere-x-air-jordan-1-high-og-do7097-100",
      "StadiumGoods-link": ""
    }],
    
        [
            {
              "Name": "Jordan 2 Retro Lucky Green",
              "Style-Code": "DR8884-103",
              "Retail-Price": "$175",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/084/035/932/original/1072273_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "2/3/2023",
              "Product-Description": "The Air Jordan 2 Retro ‘Lucky Green’ updates Michael Jordan’s sophomore signature shoe with a verdant pop of color. Like the high-top’s OG releases — which were limited to just two colorways in 1987 — the upper utilizes white leather construction with a tonal lizard-textured overlay. The latter features contrast-hued piping that transitions from green to black to green. Emerald accents land on the heel, interior lining, and the Wings logo embossed on the tongue. A vintage off-white finish is applied to the polyurethane midsole, fitted with an encapsulated Air-sole unit in the heel.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-lucky-green",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-lucky-green-dr8884-103",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro OG Chicago (2022)",
              "Style-Code": "DX2454-106",
              "Retail-Price": "$200",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/345/958/original/920715_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "12/30/2022",
              "Product-Description": "2022 was unofficially dubbed the Year of the Jordan 2, as Jordan Brand brought back the classic Air Jordan 2 Chicago in its true OG form. The Air Jordan 2 Chicago reps the same historic colorway worn by Michael Jordan during his 1986-1987 season with the Bulls. The sneaker features white reptile-embossed leather uppers, Varsity Red reptile spine design on the heel, and Varsity Red signature Wings logo on the tongue. A black midsole and \"NIKE\" debossed branding on the heel tab ties up this signature silhouette.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-chicago-2022",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-chicago-2022-dx2454-106",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro J Balvin",
              "Style-Code": "DQ7691-419",
              "Retail-Price": "$300",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/369/335/original/949375_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "9/15/2022",
              "Product-Description": "The Air Jordan 2 Retro J Balvin is a sneaker that came to be as a result of a collaboration between Nike and J Balvin to help tell the story of his mental health journey.  The Retro J Balvin Air Jordan 2 has an energetic blue color scheme and is coupled with cloud graphics on the heel counter and sock liner. The pair of sneakers has rainbow stitching throughout the entirety of the shoe and J Balvin’s signature smiley face branding on the heel. It also features a light-up Wings logo on the tongue that illuminates when pressed.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-j-balvin",
              "GOAT-link": "https://www.goat.com/sneakers/j-balvin-x-air-jordan-2-retro-dq7691-419",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro A Ma Maniére Airness",
              "Style-Code": "DO7216-100",
              "Retail-Price": "$225",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/630/322/original/892794_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "6/4/2022",
              "Product-Description": "The A Ma Maniére x Air Jordan 2 Retro SP 'Airness' reunites the Atlanta-based retailer with Jordan Brand for collaboration no. 3. This elevated take on the AJ2 showcases an off-white cracked leather upper with burgundy piping and a translucent heel counter that extends into the midfoot. ‘Maniére’ is stamped in white lettering on the burgundy leather heel tab. Contrasting black accents settle on the laces, quilted interior lining and tongue, featuring snakeskin detailing and a retro Wings logo. The black snakeskin motif is repeated on the midsole — an exotic touch that nods to the OG Air Jordan 2 from 1986, which was made in Italy and featured a subtle reptilian texture on the leather upper.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-a-ma-maniere",
              "GOAT-link": "https://www.goat.com/sneakers/a-ma-maniere-x-air-jordan-2-retro-sp-amm-aj2",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Silver Anniversary",
              "Style-Code": "385475-101",
              "Retail-Price": "$135",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/000/032/646/original/385475_101.png.png?action=crop&width=900",
              "Release-Date": "2/27/2010",
              "Product-Description": "Jordan Brand’s 25th anniversary in 2010 ushered in the second retro run of the Jordan 2, commemorated by this ‘25th Anniversary’ model. Its most distinctive feature is the 3M reflective metallic silver on the trim, mudguard, heel and tongue. It also comes with white patent leather on the side panels, white tumbled leather on the toe box and simple AIR branding on the heel.",
              "StockX-link": "https://stockx.com/jordan-2-retro-silver-anniversary",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-25th-anniversary-385475-101",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Melo (2018)",
              "Style-Code": "385475-122",
              "Retail-Price": "$190",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/197/146/original/196452_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "6/9/2018",
              "Product-Description": "Throw that hoodie on when you're rocking these Air Jordan Melo 2s. Staying true to their 2004 predecessor, this re-release comes in the same Denver Nuggets-themed white, university blue and varsity maize colorway. Sporting a white-based leather upper with blue and yellow accents, finished off by original \"Nike\" branding on the back heels, this new version features the number \"15\" on the inside tongue tags, representing Carmelo’s original jersey number and custom printed \"Melo\" branded insoles. These Melos dropped in June of 2018 and were available at select Jordan Brand retailers worldwide. This colorway is a must-have for Melo fans",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-melo-2018",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-melo-385475-122",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Doernbecher Peacock",
              "Style-Code": "318304-071",
              "Retail-Price": "$140",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/963/711/original/14028_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "11/9/2007",
              "Product-Description": "Nike empowers children and teenagers every year by letting them design their own shoes as part of a collaboration with the OHSU Doernbecher Children's Hospital in Portland, Oregon. Fifteen-year-old Sheridan Brenton endured the trauma of over 40 surgeries to fix his injuries following a car accident. His sneaker, the Air Jordan 2 High 'Doernbecher,' features a paisley printed upper with 35 perforations on the forefoot as a nod to his jersey number, black snakeskin details on the side panel, and black suede on the eyestay.",
              "StockX-link": "https://stockx.com/jordan-2-retro-doernbecher-peacock",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-high-db-charity-318304-071",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro SP Union Grey Fog",
              "Style-Code": "DN3802-001",
              "Retail-Price": "$225",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/012/173/original/848369_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "4/15/2022",
              "Product-Description": "The Union LA x Air Jordan 2 Retro SP ‘Grey Fog’ delivers a modern take on the legacy silhouette originally released in 1986. Chris Gibbs and the Union crew dress the sneaker in a pale blue textile upper with tonal suede construction on the mudguard and quarter panel, featuring perforated detailing that reveals a bright blue underlay. The vibrant hue reappears on the sneaker’s molded eyelets, which is accented with a yellow ‘UN/LA’ tag on the lateral side. A woven tag looped over the collar displays a retro Wings logo, while an oversized Jumpman label adorns the exposed foam tongue. Anchoring the sneaker is a blue-tinged polyurethane midsole with encapsulated Air-sole cushioning. The Union x Jordan 2 'Grey Fog' will release on April 15, 2022.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-union-grey-fog",
              "GOAT-link": "https://www.goat.com/sneakers/union-la-x-air-jordan-2-retro-sp-grey-fog-dn3802-001",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro SP Union Rattan",
              "Style-Code": "DN3802-200",
              "Retail-Price": "$225",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/060/465/original/878615_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "4/15/2022",
              "Product-Description": "The Air Jordan 1 Union LA Grey Fog arrives with a cream canvas upper with light beige perforated suede overlays and mudguards. Yellow eyelets, eyestay patches, and piping add a pop of color. Matching tongues with a yellowed woven tag and exposed foam edges offer a worn-in look. From there, \"UN|LA\" and \"HO2021\" external tags complete the design.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-union-rattan",
              "GOAT-link": "https://www.goat.com/sneakers/union-la-x-air-jordan-2-retro-sp-rattan-dn3802-200",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Low SP Off-White White Red",
              "Style-Code": "DJ4375-106",
              "Retail-Price": "$250",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/063/088/331/original/789218_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "11/12/2021",
              "Product-Description": "The Off-White x Air Jordan 2 Retro Low SP ‘White Varsity Red’ delivers Virgil Abloh’s take on the retro silhouette originally released in 1986. This pair replicates the look of the OG ‘White/Red’ colorway, featuring a white leather upper with red piping and a matching red heel overlay. Abloh’s signature touches are present and accounted for, including a plastic zip tie, Helvetica text on the medial side panel, and exposed foam on the collar and tongue. On the lateral side, Michael Jordan’s signature is scrawled across a textured lizard-inspired overlay. The low-top is mounted on a pre-yellowed midsole with cracked sidewalls that simulate the sort of crumbling that commonly besets vintage sneakers.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-low-sp-off-white-white-red",
              "GOAT-link": "https://www.goat.com/sneakers/off-white-x-air-jordan-2-retro-low-sp-dj4375-106",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Low SP Off-White Black Blue",
              "Style-Code": "DJ4375-004",
              "Retail-Price": "$250",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/062/992/386/original/789219_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "11/12/2021",
              "Product-Description": "The Air Jordan 2 Off-White Black Blue nods to the natural aging process of original Air Jordans. It features a black leather upper with blue piping, textural overlays, and Michael Jordan's signature on the lateral side. At the heel, a blue heel cap is prominent with Nike branding. Looks of aging are apparent on the design's sole, where the midsole is artificially decayed with translucent material filling the gaps. Off-White's signature address print on the interior and a Jordan Wings logo on the tongue add the finishing touch.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-low-sp-off-white-black-blue",
              "GOAT-link": "https://www.goat.com/sneakers/off-white-x-air-jordan-2-retro-low-sp-dj4375-black",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro SP Maison Chateau Rouge",
              "Style-Code": "DO5254-180",
              "Retail-Price": "$225",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/423/098/original/931089_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "7/14/2022",
              "Product-Description": "The Maison Château Rouge x Air Jordan 2 ‘United Youth International’ reunites Jordan Brand with the Parisian lifestyle brand helmed by designer Youssouf Fofana. This special-edition AJ2 is included in a capsule collection inspired by African influences and the youth culture of Paris’ Château Rouge neighborhood. The upper is crafted from off-white leather with hand-stitch detailing, brogue-like perforations and orange nubuck overlays at the forefoot and heel. A yellow Wings logo adorns the tongue, while mismatched heel tabs display a Nike wordmark on the left shoe and Maison Château Rouge branding on the right. Inside the shoe, custom insoles feature illustrated depictions of His Airness in mid-flight.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-maison-chateau-rouge",
              "GOAT-link": "https://www.goat.com/sneakers/maison-chateau-rouge-x-air-jordan-2-united-youth-international-do5254-180",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro QF Univ. Blue Black (2010)",
              "Style-Code": "395709-401",
              "Retail-Price": "$135",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/000/032/743/original/395709_401.png.png?action=crop&width=900",
              "Release-Date": "7/31/2010",
              "Product-Description": "This Air Jordan 2 colorway pays tribute to Michael Jordan’s alma mater, the University of North Carolina, by featuring a University Blue leather upper with black accents. A black midsole and an icy translucent outsole appear underfoot. The shoe also boasts the silhouette’s signature ‘Wings’ logo on the tongue and has faux lizard-skin panels.",
              "StockX-link": "https://stockx.com/jordan-2-retro-qf-univ-blue-black-2010",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-qf-395709-401",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Craft Muslin (W)",
              "Style-Code": "DX4400-118",
              "Retail-Price": "$175",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/084/154/524/original/952730_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "1/26/2023",
              "Product-Description": "The Women’s Air Jordan 2 Retro ‘Craft’ gives the legacy silhouette a refined makeover. Michael Jordan’s second signature shoe sports a white leather upper with molded grey eyelets and a lizard-textured midfoot overlay in a dark tan hue. An embossed Wings logo decorates the tongue, while a Nike wordmark is embroidered on the heel tab. The sneaker sits atop a cream-colored polyurethane midsole, supported underfoot by a two-tone rubber outsole in grey and pink.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-craft-muslin-w",
              "GOAT-link": "https://www.goat.com/sneakers/wmns-air-jordan-2-retro-craft-dx4400-118",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Alternate 87",
              "Style-Code": "834274-001",
              "Retail-Price": "$190",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/325/436/original/53319_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "2/6/2016",
              "Product-Description": "The Air Jordan 2 Retro BG 'Alternate 87' celebrates the Chicago Bulls with a classic black and Varsity Red color scheme. The sneaker features a black leather upper with perforations along the mudguard for breathability and snakeskin detailing on the overlays on the sidewall. The mid top also boasts Varsity Red accents on the eyelets, heel, lining, and on the Wings branding on the oversized tongue.",
              "StockX-link": "https://stockx.com/jordan-2-retro-alternate-87",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-bg-alternate-87-834276-001",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Low Responsibility",
              "Style-Code": "DR9834-060",
              "Retail-Price": "$225",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/978/431/original/955674_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "1/28/2023",
              "Product-Description": "The Air Jordan 2 Retro SP Low ‘Responsibility’ delivers a luxe take on the heritage silhouette. Crafted from black nubuck, the upper features a midfoot overlay in grey elephant-print textile and a low-cut collar lined in quilted fabric. A retro Wings logo is embossed on the black leather tongue, while a woven tag on the sockliner reads ‘JORDAN presents RESPONSIBILITY’ and ‘wear your shoes show the world where you’ve been.’ The low-profile silhouette is underpinned by a midsole wrapped in shaggy beige suede.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-low-responsibility",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-low-responsibility-dr9834-060",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro QF Black White",
              "Style-Code": "395709-001",
              "Retail-Price": "$120",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/066/735/523/original/14003_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "10/23/2010",
              "Product-Description": "When the Air Jordan 2 debut in 1986, it was considered refined and masterfully crafted. It was one of the first sneakers manufactured in Italy. The Air Jordan 2 Retro QF features a black faux lizard-skin upper, with matching patent accents on the ankle and suede overlays on the mudguard and collar. The sneaker also boasts contrasting metallic accents on the eyelets and lining, added cushioning in the midsole and Wings branding on the tongue.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-qf-black-white",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-qf-395709-001",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Low SE Nina Chanel Abney White Malachite (W)",
              "Style-Code": "DQ0560-160",
              "Retail-Price": "$225",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/102/673/original/993610_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "7/8/2022",
              "Product-Description": "The Air Jordan 2 Nina Chanel Abney reimagines the Air Jordan 2 and its history of releasing as a luxe sneaker. It boasts artisan craftsmanship with a smooth premium white leather upper, white snake-textured overlays and tongues, grey suede toe wraps, and vibrant red heel wraps. Straying from the original 1986 design, this model ditches a sloped collar with ribbed heel tabs and opts for a higher cut with a looped heel tab. A yellowed Air sole adds a vintage touch.",
              "StockX-link": "https://stockx.com/air-jordan-2-low-se-nina-chanel-abney-w",
              "GOAT-link": "https://www.goat.com/sneakers/nina-chanel-abney-x-air-jordan-2-retro-low-se-dq0560-160",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Multi-Color (W)",
              "Style-Code": "CT6244-600",
              "Retail-Price": "$190",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/807/507/original/581773_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "3/5/2020",
              "Product-Description": "The women’s Air Jordan 2 Retro 'Rivals' takes on a color scheme that recalls the uniform colors of MJ's various rival teams. The retro silhouette carries a leather upper finished in University Red, complete with faux lizard skin paneling and sleek lines outlined in Court Purple. Contrasting black hits appear on the midsole and heel, the latter branded with a discreet Nike wordmark.",
              "StockX-link": "https://stockx.com/air-jordan-2-retro-multi-color-w",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-raptors-ct6244-600",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Decon Mint Foam",
              "Style-Code": "897521-303",
              "Retail-Price": "$160",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/929/425/original/155541_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "5/24/2017",
              "Product-Description": "Initially released in 1987, the Air Jordan 2 was a sensation because of its premium Italian-made materials. Stripping down an all-time classic, Nike came out with a muted update. The Air Jordan 2 Retro Deconstructed 'Mint Foam' features a Mint Foam suede upper with perforations along the forefoot for breathability instead of the traditional leather outfit. The mid-top also sports tonal accents on the branding at the tongue and heel and on the sole unit.",
              "StockX-link": "https://stockx.com/nike-air-air-jordan-2-retro-decon-mint-foam",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-deconstructed-mint-foam-897521-303",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Low Gym Red",
              "Style-Code": "832819-606",
              "Retail-Price": "$160",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/005/148/742/original/832819_606.png?action=crop&width=900",
              "Release-Date": "4/2/2016",
              "Product-Description": "The Air Jordan 2 Retro Low 'Gym Red' features a premium snake-like Gym Red leather upper with perforations along the forefoot and mudguard for breathability. The sneaker also sports matching synthetic details on the heel for added structure, turquoise insoles, and a full-length rubber sole unit for superior traction.",
              "StockX-link": "https://stockx.com/jordan-2-retro-low-gym-red",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-low-gym-red-832819-606",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Decon Bordeaux",
              "Style-Code": "897521-606",
              "Retail-Price": "$160",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/081/446/original/155638_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "5/24/2017",
              "Product-Description": "Released in limited quantities, the Nike Air Jordan 2 Retro Deconstructed ‘Bordeaux’ sneaker reimagines the legendary sneaker with a slimmed down profile and rich purple hue. This iteration was one of three colorways released, and it was only available on the East Coast. In addition to its minimized silhouette—thanks in part to the removed padding—the upper comes in a premium suede with perforations that deviate from the usual AJ II look, plus tongue and heel branding and a rubber sole.",
              "StockX-link": "https://stockx.com/nike-air-air-jordan-2-retro-decon-bordeaux",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-deconstructed-bordeaux-897521-606",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Decon Mineral Gold",
              "Style-Code": "897521-707",
              "Retail-Price": "$160",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/004/025/690/original/897521_100.png?action=crop&width=900",
              "Release-Date": "5/24/2017",
              "Product-Description": "The Air Jordan 2 Retro Deconstructed is a stripped-down version highlighted by a monochromatic look featuring a bright Mineral Gold. The Deconstructed upper is crafted out of suede, with no extra lining or backing, giving it a very toned down feel. All of the Air Jordan 2 visual cues are still there, with the swooping design lines and even the Wings logo on the tongue.",
              "StockX-link": "https://stockx.com/nike-air-air-jordan-2-retro-decon-mineral-gold",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-retro-deconstructed-897521-100",
              "StadiumGoods-link": ""
            },
            {
              "Name": "Jordan 2 Retro Quai 54",
              "Style-Code": "866035-001",
              "Retail-Price": "$180",
              "img-link": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/080/762/original/61284_01.jpg.jpeg?action=crop&width=900",
              "Release-Date": "7/23/2016",
              "Product-Description": "Since 2002, the Jordan Brand has the best basketball talent from around the world compete in an internationally-renowned Paris streetball tournament. Exclusive retros and performance shoes are released in limited numbers to commemorate the event. For 2016, Nike released a retro of the Jordan 2 in a ‘Quai 54’ treatment featuring premium Light Bone leather, with the the tongue featuring the Air Jordan ‘Wings’ logo on one sneaker and the tournament logo in metallic gold on the other.",
              "StockX-link": "https://stockx.com/jordan-2-retro-quai-54",
              "GOAT-link": "https://www.goat.com/sneakers/air-jordan-2-quai-54-866035-001",
              "StadiumGoods-link": ""
            },
            {
              "Name": "",
              "Style-Code": "",
              "Retail-Price": "",
              "img-link": "",
              "Release-Date": "",
              "Product-Description": "",
              "StockX-link": "",
              "GOAT-link": "",
              "StadiumGoods-link": ""
            }
          ]

    ]
    


// jordan_1_list.forEach(sneaker => {
//     const sneakerDropdownItem = document.getElementById("myDropdown")

//        console.log(sneakerDropdownItem)
//        const sneakerInfoContainer = document.getElementById("sneaker-info");

//        const nameElement = document.getElementById("shoe-name");
//        nameElement.innerText = sneaker.Name;
   
//        const cardNameElement = document.getElementById("shoe-card-name");
//        cardNameElement.innerText = sneaker.Name;
   
//        const cardImg = document.getElementById("shoe-img");
//        cardImg.innerText = sneaker.ImgLink;
   
//        const cardStyleCode = document.getElementById("style-code");
//        cardStyleCode.innerText = sneaker.StyleCode;
   
//        const cardStockXLink = document.getElementById("stockx-link");
//        cardStockXLink.innerText = sneaker.StockXLink;
   
//        const cardGoatLink = document.getElementById("goat-link");
//        cardGoatLink.innerText = sneaker.GOATLink;
// })

const homepage = document.getElementById("homepage")
const catalog = document.getElementById("catalog")
// const parent = document.getElementById("myDropdown")

homepage.addEventListener('click', (e) => {
    if (e.target.className === "resize" ) {
        homepage.setAttribute("hidden", true) 
        catalog.removeAttribute("hidden") 
        const index = Number(e.target.id) 
        console.log(index)
        console.log(jordan_list[index])
        // const sneakers = jordan_list[index];

    jordan_list[index].forEach(sneaker => { 
        
            let newDropdown = document.createElement("div")
            newDropdown.className = "dropdown"
            newDropdown.id = "parent-dropdown"
    
            const button = document.createElement("button")
            button.className = "dropbtn"
            button.id = "parent-button"
    
            const sneakerName = document.createElement("p")
            sneakerName.id = "dropdown-name"
            newDropdown.append(sneakerName)
    
            const sneakerPrice = document.createElement("p")
            sneakerPrice.id = "dropdown-price"
            newDropdown.append(sneakerPrice)
    
            const sneakerStyleCode = document.createElement("p")
            sneakerStyleCode.id = "dropdown-style-code"
            newDropdown.append(sneakerStyleCode)
    
            const sneakerImage = document.createElement("img")
            sneakerImage.id = "dropdown-img"
            newDropdown.append(sneakerImage)
    
            const sneakerDescription = document.createElement("p")
            sneakerDescription.id = "dropdown-description"
            newDropdown.append(sneakerDescription)
    
            const sneakerStockX = document.createElement("a")
            sneakerStockX.id = "dropdown-stockx"
            newDropdown.append(sneakerStockX)
    
            const sneakerGOAT = document.createElement("a")
            sneakerGOAT.id = "dropdown-goat"
            newDropdown.append(sneakerGOAT)
    
            const parent = document.getElementById("parent-dropdown")
            parent.append(newDropdown)
    
            
            sneakerPrice.innerText = sneaker["Retail-Price"]
            sneakerStyleCode.innerText = sneaker["Style-Code"]
            sneakerImage.src = sneaker["img-link"]
            sneakerDescription.innerText = sneaker["Product-Description"]


    })


        
        // const sneaker = jordan_1_list[index]
        
        
        

    }
   //use the index, key into the sneaker, find info that corresponds and set each of the values to the inner text of the dropdown
    
})
