$(document).ready(function () {
    var lista = [{
        titulo: "TG - Demonstração",
        imagem: "../img/logo_tg.jpg",
        tipo: "Website"
    }, {
        titulo: "Los Toxicos",
        imagem: "../img/logo_los_toxicos.jpg",
        tipo: "Mascot"
    }, {
        titulo: "Os Brabos",
        imagem: "../img/logo_os_brabos.jpg",
        tipo: "Mascot"
    }, {
        titulo: "Matilha E-sports",
        imagem: "../img/logo_matilha.jpg",
        tipo: "Mascot"
    }, {
        titulo: "GR Design",
        imagem: "../img/logo_gr_design.jpg",
        tipo: "Logo"
    }, {
        titulo: "Brasil Vintage",
        imagem: "../img/logo_vintage.jpg",
        tipo: "Art"
    }, {
        titulo: "Night King",
        imagem: "../img/illustration_night_king.jpg",
        tipo: "Illustration"
    }, {
        titulo: "Sansa Stark",
        imagem: "../img/illustration_sansa_stark.jpg",
        tipo: "Illustration"
    }, {
        titulo: "Aero Parts Trader",
        imagem: "../img/logo_aero.jpg",
        tipo: "Logo"
    }, {
        titulo: "Al Aliiaa Policlinic",
        imagem: "../img/logo_al.jpg",
        tipo: "Logo"
    }, {
        titulo: "A.S.K",
        imagem: "../img/logo_ask.jpg",
        tipo: "Logo"
    }, {
        titulo: "Cinematic Ink",
        imagem: "../img/logo_cinematic_inc.jpg",
        tipo: "Logo"
    }, {
        titulo: "Colorado Adventure Guides",
        imagem: "../img/logo_colorado.jpg",
        tipo: "Logo"
    }, {
        titulo: "Cone Pizzas",
        imagem: "../img/logo_cone.jpg",
        tipo: "Logo"
    }, {
        titulo: "De Keukenkenners",
        imagem: "../img/logo_dek.jpg",
        tipo: "Logo"
    }, {
        titulo: "Doto",
        imagem: "../img/logo_doto.jpg",
        tipo: "Logo"
    }, {
        titulo: "Eagles Glory International",
        imagem: "../img/logo_eagles.jpg",
        tipo: "Logo"
    }, {
        titulo: "Fabled",
        imagem: "../img/logo_fabled.jpg",
        tipo: "Logo"
    }, {
        titulo: "Federal Law Solutions",
        imagem: "../img/logo_fls.jpg",
        tipo: "Logo"
    }, {
        titulo: "Girls Contest",
        imagem: "../img/logo_girls_contest.jpg",
        tipo: "Logo"
    }, {
        titulo: "Blackjack Horns",
        imagem: "../img/logo_horns.jpg",
        tipo: "Logo"
    }, {
        titulo: "I am K",
        imagem: "../img/logo_k.jpg",
        tipo: "Logo"
    }, {
        titulo: "Kunaka",
        imagem: "../img/logo_kunaka.jpg",
        tipo: "Logo"
    }, {
        titulo: "MG e-Sports",
        imagem: "../img/logo_mg.jpg",
        tipo: "Logo"
    }, {
        titulo: "Nautical Directions",
        imagem: "../img/logo_nautical.jpg",
        tipo: "Logo"
    }, {
        titulo: "Uniformed Security",
        imagem: "../img/logo_police.jpg",
        tipo: "Logo"
    }, {
        titulo: "Rosin",
        imagem: "../img/logo_rosin.jpg",
        tipo: "Logo"
    }, {
        titulo: "Scarbo",
        imagem: "../img/logo_scarbo.jpg",
        tipo: "Logo"
    }, {
        titulo: "Set in Stone",
        imagem: "../img/logo_sis.jpg",
        tipo: "Logo"
    }, {
        titulo: "Strive",
        imagem: "../img/logo_strive.jpg",
        tipo: "Logo"
    }, {
        titulo: "Wood Fuel Testing",
        imagem: "../img/logo_wood.jpg",
        tipo: "Logo"
    }, {
        titulo: "Yes Om Yoga Gear",
        imagem: "../img/logo_yoga.jpg",
        tipo: "Logo"
    }, {
        titulo: "Zenger",
        imagem: "../img/logo_zenger.jpg",
        tipo: "Logo"
    }, {
        titulo: "Gravity Concept Store",
        imagem: "../img/logo_gravity.jpg",
        tipo: "Logo"
    }, {
        titulo: "Heights Pet Hospital",
        imagem: "../img/logo_hph.jpg",
        tipo: "Logo"
    }, {
        titulo: "Nu Skin",
        imagem: "../img/logo_nuskin.jpg",
        tipo: "Logo"
    }];

    var produtos = [{
        titulo: "Sonics",
        imagem: "../img/sonics.png",
        preco: 100,
        tipo: "Mascot"
    }, {
        titulo: "Goblins",
        imagem: "../img/goblins.png",
        preco: 60,
        tipo: "Mascot"
    }, {
        titulo: "Mamba",
        imagem: "../img/mamba.png",
        preco: 65,
        tipo: "Mascot"
    }, {
        titulo: "Aliens",
        imagem: "../img/aliens.png",
        preco: 55,
        tipo: "Mascot"
    }, {
        titulo: "Zombies",
        imagem: "../img/zombies.png",
        preco: 60,
        tipo: "Mascot"
    }, {
        titulo: "Cowboy",
        imagem: "../img/cowboy.png",
        preco: 40,
        tipo: "Mascot"
    }, {
        titulo: "Genie",
        imagem: "../img/genie.png",
        preco: 22,
        tipo: "Mascot"
    }, {
        titulo: "Jaguar",
        imagem: "../img/jaguar.png",
        preco: 35,
        tipo: "Mascot"
    }, {
        titulo: "Bunny",
        imagem: "../img/bunny.png",
        preco: 25,
        tipo: "Mascot"
    }, {
        titulo: "Unicorn",
        imagem: "../img/unicorn.png",
        preco: 45,
        tipo: "Mascot"
    }, {
        titulo: "Hunter",
        imagem: "../img/hunter.png",
        preco: 45,
        tipo: "Mascot"
    }, {
        titulo: "Boar",
        imagem: "../img/boar.png",
        preco: 35,
        tipo: "Mascot"
    }, {
        titulo: "Executioner",
        imagem: "../img/executioner.png",
        preco: 30,
        tipo: "Mascot"
    }, {
        titulo: "Monkeys",
        imagem: "../img/monkeys.png",
        preco: 80,
        tipo: "Mascot"
    }, {
        titulo: "Fox",
        imagem: "../img/fox.png",
        preco: 20,
        tipo: "Mascot"
    }, {
        titulo: "Sorcerer",
        imagem: "../img/sorcerer.png",
        preco: 70,
        tipo: "Mascot"
    }, {
        titulo: "Astronaut",
        imagem: "../img/astronaut.png",
        preco: 25,
        tipo: "Mascot"
    }, {
        titulo: "Eagles",
        imagem: "../img/eagles.png",
        preco: 30,
        tipo: "Mascot"
    }, {
        titulo: "Raptors",
        imagem: "../img/raptors.png",
        preco: 50,
        tipo: "Mascot"
    }, {
        titulo: "Witch Doctor",
        imagem: "../img/witch_doctor.png",
        preco: 60,
        tipo: "Mascot"
    }, {
        titulo: "Pharaohs",
        imagem: "../img/pharaohs.png",
        preco: 15,
        tipo: "Mascot"
    }, {
        titulo: "Pirates",
        imagem: "../img/pirates.png",
        preco: 50,
        tipo: "Mascot"
    }];

    /* ------------------------PORTFOLIO------------------------ */

    function gerarPortfolio(vetor) {
        var linha = '<div class="ui grid">';

        $.each(vetor, function (key, value) {
            linha += '<div class="sixteen wide mobile eight wide tablet four wide computer column">';
            linha += '<div class="card">';
            linha += '<div class="blurring dimmable image">';
            linha += '<div class="ui dimmer">';
            linha += '<div class="content">';
            linha += '<div class="center">';
            linha += '<h3 class="ui inverted header">' + value.titulo + '</h3>';
            linha += '<div class="ui inverted sub header">' + value.tipo + '</div>';
            linha += '</div>';
            linha += '</div>';
            linha += '</div>';
            linha += '<img class="ui huge image padrao" src="../img/default2.jpg" data-src="' + value.imagem + '">';
            linha += '</div>';
            linha += '</div>';
            linha += '</div>';
        });

        linha += '</div>';

        $("#galeria").append(linha);
    }

    gerarPortfolio(lista);

    /* ------------------------LOJA------------------------ */

    function addLinhaLoja(produto) {
        var loja = '';

        loja += '<div class="sixteen wide mobile eight wide tablet four wide computer column">';
        loja += '<div class="ui card">';
        loja += '<img class="ui huge image padrao" src="../img/default.jpg" data-src="' + produto.imagem + '">';
        loja += '<div class="content">';
        loja += '<div class="header">' + produto.titulo + '</div>';
        loja += '<div class="meta"><span class="date">' + produto.tipo + '</span></div>';
        loja += '</div>';
        loja += '<div class="extra content">';
        loja += '<div class="ui right floated large tag label green">$' + produto.preco + '.00 </div>';
        loja += '<button class="ui labeled black basic icon zoom button small left floated" value="' + produto.imagem + '">';
        loja += '<i class="zoom icon"></i>Zoom</button>';
        loja += '</div>';
        loja += '</div>';
        loja += '</div>';

        $("#loja").append(loja);
    }

    function listarProdutos(lista) {
        $.each(lista, function (i, prod) {
            addLinhaLoja(prod);
        });
    }

    listarProdutos(produtos);

    $("button.zoom").on("click", function () {
        var url = $(this).val();
        $("#troca").attr('src', url);
        $('.ui.fullscreen.modal')
            .modal('setting', 'transition', 'scale')
            .modal({
                blurring: true
            })
            .modal('show');
    });

    $('.card .image').dimmer({
        on: 'hover'
    });

    $('.propaganda')
        .transition({
            animation: 'fade down',
            duration: 600
        });

    $('.padrao')
        .visibility({
            type: 'image',
            transition: 'fade in',
            duration: 200
        });

    $('.ui.dropdown')
        .dropdown({
            action: 'hide'
        });
    
    $('.skill').progress();
});