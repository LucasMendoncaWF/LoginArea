var Cadastros = [{ Login: 'test', Password: 'test', Name: 'Lucas Mendonça' }];
//Muda a visualização para exibir o formulário de cadastro
$('#criar-conta').click(function () {
    $('.login-entrar').slideToggle(400);
    $('.cadastrar').slideToggle(400);
    $('#email-login, #senha-login').val('');
});
//botao para logar
$('#botao-entrar').click(function (e) {
    e.stopPropagation();
    var userData = [];
    //Verifica se os campos estao preenchidos
    if ($('#senha-login').val() && $('#email-login').val()) {
        //Verifica se os dados inseridos nos campos batem com os dados dentro da variavel Cadastros
        var logado = false;
        for (var _i = 0, Cadastros_1 = Cadastros; _i < Cadastros_1.length; _i++) {
            var cadastro = Cadastros_1[_i];
            if (cadastro.Login == $('#email-login').val() && cadastro.Password == $('#senha-login').val()) {
                logado = true;
                userData.push(cadastro);
                break;
            }
        }
        if (!logado) {
            $('.error-text').show().text('O nome do usuário ou senha estão incorretos.');
        }
        else {
            $('.error-text').hide();
            $('.login-entrar').slideToggle(400);
            $('.logado').slideToggle(400);
            $('#email-login, #senha-login').val('');
            $('.welcome').append("<div class='welcome-mensagem'>Bem-Vindo, <b>" + userData[0].Name + "</b></div>");
        }
    }
    else {
        //os campos ficam com a borda de baixo vermelha caso nao estejam preenchidos
        if (!$('#senha-login').val()) {
            $('#senha-login').css('border-bottom', '1px solid red');
        }
        if (!$('#email-login').val()) {
            $('#email-login').css('border-bottom', '1px solid red');
        }
        $('.error-text').show().text('Preencha todos os campos.');
    }
});
//Cadastra as informações do formulario de cadastro na variavel Cadastros
$('#botao-cadastrar').click(function (e) {
    e.stopPropagation();
    //verifica se os campos estão preenchidos
    if ($('#nome-cadastro').val() && $('#email-cadastro').val() && $('#senha-cadastro').val() && $('#senha-cadastro-confirm').val()) {
        //Verifica se as duas senhas estão iguais
        if ($('#senha-cadastro').val() == $('#senha-cadastro-confirm').val()) {
            //Verifica se nao possui nenhum e-mail igual cadastrado
            var emailJaCadastrado = false;
            for (var _i = 0, Cadastros_2 = Cadastros; _i < Cadastros_2.length; _i++) {
                var cadastro = Cadastros_2[_i];
                if (cadastro.Login == $('#email-cadastro').val()) {
                    emailJaCadastrado = true;
                }
            }
            if (!emailJaCadastrado) {
                $('.error-text').hide();
                //cadastra os dados
                Cadastros.push({
                    Login: $('#email-cadastro').val(),
                    Password: $('#senha-cadastro').val(),
                    Name: $('#nome-cadastro').val()
                });
                //volta para a tela de login
                $('.login-entrar').slideToggle(400);
                $('.cadastrar').slideToggle(400);
                $('.cadastro-sucesso').show();
                //apaga o conteudo dos campos
                $('#nome-cadastro, #email-cadastro, #senha-cadastro, #senha-cadastro-confirm').val('');
            }
            else {
                $('.error-text').show().text('Este e-mail já foi cadastrado, por favor escolha outro');
            }
        }
        else {
            $('.error-text').show().text('As senhas não estão iguais');
        }
    }
    else {
        //os campos ficam com a borda de baixo vermelha caso nao estejam preenchidos
        $('.error-text').show().text('Preencha todos os campos');
        if (!$('#nome-cadastro').val()) {
            $('#nome-cadastro').css('border-bottom', '1px solid red');
        }
        if (!$('#email-cadastro').val()) {
            $('#email-cadastro').css('border-bottom', '1px solid red');
        }
        if (!$('#senha-cadastro').val()) {
            $('#senha-cadastro').css('border-bottom', '1px solid red');
        }
        if (!$('#senha-cadastro-confirm').val()) {
            $('#senha-cadastro-confirm').css('border-bottom', '1px solid red');
        }
    }
});
//Ao clicar na tela, os campos voltam a coloração normal e as mensagens de avisos somem
$('body').click(function () {
    $('.error-text').hide();
    $('.cadastro-sucesso').hide();
    $('#nome-cadastro, #email-cadastro, #senha-cadastro, #email-login, #senha-login, #senha-cadastro-confirm').css('border-bottom', '1px solid #0d8686');
});
//deslogar
$('.botao-sair').click(function () {
    $('.welcome-mensagem').detach();
    $('.logado').slideToggle(400);
    $('.login-entrar').slideToggle(400);
});
