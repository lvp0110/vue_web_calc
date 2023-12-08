const App = {
    data()
    {
        return {
            unvisible:false,
            errorMessage:'true',
            tableConstrToCalc:null,
            counterConstr: 0,
            visible:false,
            currentCategory: 0,
            currentSubCategory: 0,
            currentItems: 0,
            template:null,
            profileStep: 600,
            dFrame:false,
            counters:null,
            currentConstr:'',
            ConstrToCalcToSent:[],
            ConstrToCalc: [],
            constR:{
                id: '',
                idType: '',
                title: '',
                type: '',
                lenX: null,
                lenXp: null,
                lenY: null,
                lenZ: null,
                lenZp: null,
                description: '',
                img: '',
                step: null,
                ag_id:'',
                key_id:null,
            },
            constRZero:{
                id: '',
                idType: '',
                title: '',
                type: '',
                lenX: null,
                lenY: null,
                lenZ: null,
                description: '',
                img: '',
                step: null,
                ag_id:'',
                key_id:null,
            },
            constrSent:{
                Code    :  '',
                LenX   :   0,
                LenY   :   0,
                LenZ    :  0,
                dframe  :  false,
                Area    :  0,
                Perimeter: 0,
                step    :  0,
                Openings: [],
            },
            opening:{
                lenX: null,
                lenZ: null,
                Type: 'OST_Doors',
            },
            constSentZero:{
                Code    :  '',
                LenX   :   0,
                LenY   :   0,
                LenZ    :  0,
                dframe  :  false,
                Area    :  0,
                Perimeter: 0,
                step    :  0,
                Openings: [],
            },
            openingZero:{
                lenX: null,
                lenZ: null,
                Type: 'OST_Doors',
            },
            Categories: [
                { id: 1, title: 'РЕШЕНИЯ ПО ЗВУКОИЗОЛЯЦИИ',background:'#248CB9' },
                { id: 2, title: 'АКУСТИЧЕСКИЕ РЕШЕНИЯ',background:'#11556F' },
            ],
            SubCategories: [
                { id: 'F', title: 'ПОЛ', c_id: 1 ,img: 'img/icon_floor_white.svg',imgBlack: 'img/icon_floor.svg' },
                { id: 'C', title: 'ПОТОЛОК', c_id: 1 ,img:'img/icon_ceiling_white.svg',imgBlack:'img/icon_ceiling.svg'},
                { id: 'L', title: 'ОБЛИЦОВКА', c_id: 1 ,img:'img/icon_frame_white.svg',imgBlack:'img/icon_frame.svg'},
                { id: 'W', title: 'ПЕРЕГОРОДКА', c_id: 1 ,img:'img/icon_partition_white.svg',imgBlack:'img/icon_partittion.svg'},
                { id: 5, title: 'РАЗДЕЛ В РАЗРАБОТКЕ', c_id: 2 },
                { id: 6, title: 'SECTION UNDER DEVELOPMENT', c_id: 2 },
            ],
        
            Items: [
                {
                    id: 101, 
                    title: 'Перегородка на каркасе 50 мм',
                    description: 'Перегородка на одинарном каркасе 50 мм',
                    c_id: 'W',
                    template:50.1 ,
                    img: 'img/Img_constr/partition/partition_50.webp',
                    ag_id: 'AG.W101'
                },
                {
                    id: 102, 
                    title: 'Перегородка на каркасе 75 мм',
                    description: 'Перегородка на одинарном каркасе 75 мм',
                    c_id :'W',
                    template:75.1,
                    img: 'img/Img_constr/partition/partition_75.webp',
                    ag_id: 'AG.W102'
                },
                {
                    id: 103, 
                    title: 'Перегородка на каркасе 100 мм',
                    description: 'Перегородка на одинарном каркасе 100 мм',
                    c_id:'W',
                    template:100.1,
                    img: 'img/Img_constr/partition/partition_100.webp',
                    ag_id: 'AG.W103'
                },
                {
                    id: 104, 
                    title: 'Перегородка на каркасе Wave 100 мм',
                    description: 'Перегородка на одинарном каркасе Виброфлекс-Wave 100 мм',
                    c_id:'W',
                    template:101.1,
                    img: 'img/Img_constr/partition/partition_100.webp',
                    ag_id: 'AG.W104'
                },
                {
                    id: 105, 
                    title: 'Перегородка на каркасе 2x50 мм',
                    description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x50 мм на раздельных основаниях звукоизолирующих полов',
                    c_id:'W',
                    template:50.2,
                    img: 'img/Img_constr/partition/partition_50_2.webp',
                    ag_id: 'AG.W105'
                },
                {
                    id: 106, 
                    title: 'Перегородка на каркасе 2x75 мм',
                    description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x75 мм на раздельных основаниях звукоизолирующих полов',
                    c_id:'W',
                    template:75.2,
                    img: 'img/Img_constr/partition/partition_75_2.webp',
                    ag_id: 'AG.W106'
                },
                {
                    id: 107, 
                    title: 'Перегородка на каркасе 2x100 мм',
                    description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x100 мм на раздельных основаниях звукоизолирующих полов',
                    c_id:'W',
                    template:100.2,
                    img: 'img/Img_constr/partition/partition_100_2.webp',
                    ag_id: 'AG.W107'
                },
                {
                    id: 108, 
                    title: 'Перегородка системы Саундлайн dB-X AL',
                    description:'Перегородка системы Саундлайн dB-X AL на одинарном каркасе 50 мм',
                    c_id:'W',
                    template:8.1,
                    img: 'img/Img_constr/partition/partition_50.webp',
                    ag_id: 'AG.W108'
                },
                
                {
                    id: 201, 
                    title: 'ЗИПС-Вектор',
                    description: 'Звукоизолирующая система ЗИПС-Вектор, смонтированная на стене',
                    c_id: 'L',
                    template:6,
                    img: 'img/Img_constr/frame/frame_z_vektor.webp',
                    ag_id: 'AG.Z201'
                },
                {
                    id: 202, 
                    title: 'ЗИПС-Модуль',
                    description: 'Звукоизолирующая система ЗИПС-Модуль, смонтированная на стене',
                    c_id: 'L',
                    template:6,
                    img: 'img/Img_constr/frame/frame_z_module.webp',
                    ag_id: 'AG.Z202'
                },
                {
                    id: 203, 
                    title: 'ЗИПС-III-Ультра',
                    description: 'Звукоизолирующая система ЗИПС-III-Ультра, смонтированная на стене',
                    c_id:'L',
                    template:6,
                    img: 'img/Img_constr/frame/frame_IIIUltra.webp',                                
                    ag_id: 'AG.Z203'

                },
                {
                    id: 204, 
                    title: 'ЗИПС-Z4',
                    description: 'Звукоизолирующая система ЗИПС-Z4, смонтированная на стене',
                    c_id: 'L',
                    template:6,
                    img: 'img/Img_constr/frame/frame_Z4.webp',
                    ag_id: 'AG.Z204'

                },
                {
                    id: 205, 
                    title: 'ЗИПС-Синема',
                    description: 'Звукоизолирующая система ЗИПС-Синема, смонтированная на стене',
                    c_id:'L',
                    template:6,
                    img: 'img/Img_constr/frame/frame_z_cinema.webp',
                    ag_id: 'AG.Z205'
                },
                {
                    id: 206, 
                    title: 'ЗИПС-Слим',
                    description: 'Звукоизолирующая система ЗИПС-Слим, смонтированная на стене',
                    c_id:'L',
                    template:6,
                    img: 'img/Img_constr/frame/frame_z_slim.webp',
                    ag_id: 'AG.Z206'
                },
                
                {
                    id: 201, 
                    title: 'ЗИПС-Вектор',
                    description: 'Звукоизолирующая система ЗИПС-Вектор, смонтированная на потолке',
                    c_id:'C',
                    template:4,
                    img: 'img/Img_constr/ceiling/ceiling_z_vektor.webp',
                    ag_id: 'AG.Z201'
                },
                {
                    id: 202, 
                    title: 'ЗИПС-Модуль',
                    description: 'Звукоизолирующая система ЗИПС-Модуль, смонтированная на потолке',
                    c_id:'C',
                    template:4,
                    img: 'img/Img_constr/ceiling/ceiling_z_module.webp',
                    ag_id: 'AG.Z202'
                },
                {
                    id: 203, 
                    title: 'ЗИПС-III-Ультра',
                    description: 'Звукоизолирующая система ЗИПС-III-Ультра, смонтированная на потолке',
                    c_id:'C',
                    template:4,
                    img: 'img/Img_constr/ceiling/ceiling_IIIultra.webp',
                    ag_id: 'AG.Z203'
                },
                {
                    id: 204, 
                    title: 'ЗИПС-Z4',
                    description: 'Звукоизолирующая система ЗИПС-Z4, смонтированная на потолке',
                    c_id:'C',
                    template:4,
                    img: 'img/Img_constr/ceiling/ceiling_z4.webp',
                    ag_id: 'AG.L204'
                },
                {
                    id:205, 
                    title: 'ЗИПС-Синема',
                    description: 'Звукоизолирующая система ЗИПС-Синема, смонтированная на потолке',
                    c_id:'C',
                    template:4,
                    img: 'img/Img_constr/ceiling/ceiling_z_cinema.webp',
                    ag_id: 'AG.L205'
                },
                {
                    id: 401, 
                    title: 'Облицовка на каркасе 50 мм',
                    description: 'Облицовка на независимом сдвоенном каркасе 50 мм',
                    c_id:'L',
                    template:50,
                    img: 'img/Img_constr/frame/frame_50.webp',
                    ag_id: 'AG.L401'
                },
                {
                    id: 402, 
                    title: 'Облицовка на каркасе 75 мм',
                    description: 'Облицовка на независимом каркасе 75 мм',
                    c_id:'L',
                    template:75,
                    img: 'img/Img_constr/frame/frame_75.webp',
                    ag_id: 'AG.L402'
                },
                {
                    id: 403, 
                    title: 'Облицовка на каркасе 100 мм',
                    description: 'Облицовка на независимом каркасе 100 мм',
                    c_id:'L',
                    template:100,
                    img: 'img/Img_constr/frame/frame_100.webp',
                    ag_id: 'AG.L403'
                },
                {
                    id: 404, 
                    title: 'Облицовка c применением Виброфлекс-Коннект ПС',
                    description: 'Облицовка на каркасе ПП 60/27 с применением креплений Виброфлекс-Коннект ПС',
                    c_id:'L',
                    template:101,
                    img: 'img/Img_constr/frame/frame_connect_pc.webp',
                    ag_id: 'AG.L404'
                },
                {
                    id: 405, 
                    title: 'Облицовка с применением Виброфлекс-КС',
                    description: 'Облицовка на каркасе ПП 60/27 с применением креплений Виброфлекс-КС',
                    c_id:'L',
                    template:101,
                    img: 'img/Img_constr/frame/frame_connect_kc.webp',
                    ag_id: 'AG.L405'
                },
            
                {
                    id: 501, 
                    title: 'Потолок на креплениях Виброфлекс-Коннект ПП',
                    description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-Коннект ПП',
                    c_id:'C',
                    template:5,
                    img: 'img/Img_constr/ceiling/ceiling_100.webp',
                    ag_id: 'AG.C501'
                },
                {
                    id: 502, 
                    title: 'Потолок на креплениях Виброфлекс-К15',
                    description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-К15',
                    c_id:'C',
                    template:5,
                    img: 'img/Img_constr/ceiling/ceiling_130.webp',
                    ag_id: 'AG.C502'
                },
                {
                    id: 503, 
                    title: 'Потолок на креплениях Виброфлекс-К15 с удлинителями',
                    description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-К15 с удлинителями из профиля ПП 60/27',
                    c_id:'C',
                    template:5,
                    img: 'img/Img_constr/ceiling/ceiling_200.webp',
                    ag_id: 'AG.C503'
                },
            
                {
                    id: 601, 
                    title: 'Пол Акуфлекс-Супер, паркет, 15мм',
                    description:'Паркетная доска 15 мм на материале Акуфлекс-Супер',
                    c_id:'F',
                    template:1,
                    img: 'img/Img_constr/floor/acuflexLP.png',
                    ag_id: 'AG.F601'

                },
                {
                    id: 602, 
                    title: 'Пол Акуфлекс-Супер, ламинат, 8 мм',
                    description: 'Ламинат 8 мм на материале Акуфлекс-Супер',
                    c_id:'F',
                    template:1,
                    img: 'img/Img_constr/floor/acuflexLP.png',
                    ag_id: 'AG.F602'
                },
                {
                    id: 603, 
                    title: 'Пол Акуфлекс-Супер, стяжка, 65 мм',
                    description:'Звукоизолирующий пол на материале Акуфлекс-Супер',
                    c_id:'F',
                    template:1 ,
                    img: 'img/Img_constr/floor/acuflex.png',
                    ag_id: 'AG.F603'
                },
                {
                    id: 604, 
                    title: 'Пол Шуманет-100Комби',
                    description: 'Звукоизолирующий пол на материале Шуманет-100Комби',
                    c_id:'F',
                    template:1 ,                                
                    img: 'img/Img_constr/floor/100G_K.png',
                    ag_id: 'AG.F604'

                },
                {
                    id: 605, 
                    title: 'Пол Шуманет-100Гидро',
                    description:'Звукоизолирующий пол на материале Шуманет-100Гидро',
                    c_id:'F',
                    template:1 ,
                    img: 'img/Img_constr/floor/100G_K.png',
                    ag_id: 'AG.F605'
                },
                {
                    id: 606, 
                    title: 'Пол Шумопласт',
                    description: 'Звукоизолирующая выравнивающая смесь Шумопласт',
                    c_id:'F',
                    template:9 ,
                    img: 'img/Img_constr/floor/sPlast.png',
                    ag_id: 'AG.F606'
                },
                {
                    id: 'P', 
                    title: 'Акуфлор S20, один слой',
                    description: 'Звукоизолирующий пол с одним слоем системы плит Акуфлор S20',
                    c_id:'F',
                    template:2.1,                                
                    img: 'img/Img_constr/floor/c2k2_1.png',
                    ag_id: 'AG.F'

                },
                {
                    id: 607, 
                    title: 'Пол Шумостоп-С2/К2, один слой',
                    description: 'Звукоизолирующий пол с одним слоем системы плит Шумостоп-С2/К2',
                    c_id:'F',
                    template: 607.1 ,
                    img: 'img/Img_constr/floor/c2k2_1.png',
                    ag_id: 'AG.F607'
                },
                {
                    id: 608, 
                    title: 'Пол Шумостоп-С2/К2, два слоя',
                    description: 'Звукоизолирующий пол с двумя слоями системы плит Шумостоп-С2/К2',
                    c_id:'F',
                    template:608.1 ,
                    img: 'img/Img_constr/floor/c2k2_2.png',
                    ag_id: 'AG.F608'
                },
                {
                    id: 609, 
                    title: 'Пол Шумостоп-К2, один слой',
                    description: 'Звукоизолирующий пол с одним слоем материала Шумостоп-К2',
                    c_id:'F',
                    template:609.1 ,
                    img: 'img/Img_constr/floor/k2_1.png',
                    ag_id: 'AG.F609'
                },
                {
                    id: 610, 
                    title: 'Пол Шумостоп-К2, два слоя',
                    description: 'Звукоизолирующий пол с двумя слоями материала Шумостоп-К2',
                    c_id:'F',
                    template:610.1 ,
                    img: 'img/Img_constr/floor/k2_2.png',
                    ag_id: 'AG.F610'
                },
                {
                    id: 611, 
                    title: 'Пол Шуманет-Термо',
                    description: 'Звукоизолирующий пол с одним слоем материала Шуманет-Термо',
                    c_id:'F',
                    template:1,
                    img: 'img/Img_constr/floor/termo.png',
                    ag_id: 'AG.F611'
                },
                {
                    id: 612, 
                    title: 'Пол Шумостоп-Техно',
                    description: 'Звукоизолирующий пол с применением панелей Шумостоп-Техно',
                    c_id:'F',
                    template:9.1,
                    img: 'img/Img_constr/floor/tehno.png',
                    ag_id: 'AG.F612'
                },
                {
                    id: 613, 
                    title: 'ЗИПС-ПОЛ Вектор',
                    description: 'Сборная звукоизолирующая система ЗИПС-ПОЛ Вектор',
                    c_id:'F',
                    template:111,
                    img: 'img/Img_constr/floor/Z_Vector.png',
                    ag_id: 'AG.F613'
                },
                {
                    id: 614, 
                    title: 'ЗИПС-ПОЛ Модуль',
                    description: 'Сборная звукоизолирующая система ЗИПС-ПОЛ Модуль',
                    c_id:'F',
                    template:111,
                    img: 'img/Img_constr/floor/Z_Module.png',
                    ag_id: 'AG.F614'
                },
                {
                    id: 615, 
                    title: 'Звукоизолирующий пол на лагах',
                    description:'Звукоизолирующий пол на лагах',
                    c_id:'F',
                    template:3,
                    img: 'img/Img_constr/floor/floor_lags.png',
                    ag_id: 'AG.F615'
                },
            ],
            SizeLimits:[
                {id:'W',id_constr: 101,step:'600',max_lenZ: 4000},
                {id:'W',id_constr: 101,step:'400',max_lenZ: 5000},
                {id:'W',id_constr: 101,step:'300',max_lenZ: 6000},

                {id:'W',id_constr: 102,step:'600',max_lenZ: 5500},
                {id:'W',id_constr: 102,step:'400',max_lenZ: 6500},
                {id:'W',id_constr: 102,step:'300',max_lenZ: 7500},

                {id:'W',id_constr: 103,step:'600',max_lenZ: 6500},
                {id:'W',id_constr: 103,step:'400',max_lenZ: 7500},
                {id:'W',id_constr: 103,step:'300',max_lenZ: 8500},

                {id:'W',id_constr: 104,step:'600',max_lenZ: 6500},
                {id:'W',id_constr: 104,step:'400',max_lenZ: 7500},
                {id:'W',id_constr: 104,step:'300',max_lenZ: 8500},

                {id:'W',id_constr: 105,step:'600',max_lenZ: 4500},
                {id:'W',id_constr: 105,step:'400',max_lenZ: 5500},
                {id:'W',id_constr: 105,step:'300',max_lenZ: 6500},

                {id:'W',id_constr: 106,step:'600',max_lenZ: 6000},
                {id:'W',id_constr: 106,step:'400',max_lenZ: 7000},
                {id:'W',id_constr: 106,step:'300',max_lenZ: 8000},
                
                {id:'W',id_constr: 107,step:'600',max_lenZ: 6500},
                {id:'W',id_constr: 107,step:'400',max_lenZ: 7500},
                {id:'W',id_constr: 107,step:'300',max_lenZ: 8500},

                {id:'W',id_constr: 108,step:'600',max_lenZ: 3000},
                {id:'W',id_constr: 108,step:'400',max_lenZ: 4000},
                {id:'W',id_constr: 108,step:'300',max_lenZ: 5000},

                {id:'L',id_constr: 401,step: '600',max_lenZ: 3000},
                {id:'L',id_constr: 401,step: '400',max_lenZ: 3500},
                {id:'L',id_constr: 401,step: '300',max_lenZ: 4000},

                {id:'L',id_constr: 402,step:'600',max_lenZ: 3500},
                {id:'L',id_constr: 402,step:'400',max_lenZ: 4000},
                {id:'L',id_constr: 402,step:'300',max_lenZ: 4500},

                {id:'L',id_constr: 403,step:'600',max_lenZ: 4250},
                {id:'L',id_constr: 403,step:'400',max_lenZ: 5000},
                {id:'L',id_constr: 403,step:'300',max_lenZ: 5500},

                {id:'L',id_constr: 404,step:'600',max_lenZ: 10000},
                {id:'L',id_constr: 404,step:'400',max_lenZ: 10000},
                {id:'L',id_constr: 404,step:'300',max_lenZ: 10000},

                {id:'L',id_constr: 405,step:'600',max_lenZ: 10000},
                {id:'L',id_constr: 405,step:'400',max_lenZ: 10000},
                {id:'L',id_constr: 405,step:'300',max_lenZ: 10000},

                {id:'Z.',id_constr: 201,step:'600',max_lenZ: 6000},
                {id:'Z.',id_constr: 202,step:'600',max_lenZ: 6000},
                {id:'Z.',id_constr: 203,step:'600',max_lenZ: 6000},
                {id:'Z.',id_constr: 204,step:'600',max_lenZ: 6000},
                {id:'Z.',id_constr: 205,step:'600',max_lenZ: 6000},
                {id:'Z.',id_constr: 206,step:'600',max_lenZ: 6000},

            ],
            calculatedMaterials:[]
             
        }
    },

    computed: {
       
        getActiveCategories()
        {
            if(this.currentCategory != 0)
            {
                currentCategoryClick = this.Categories.filter((el)=>el.id == this.currentCategory)
                return currentCategoryClick;
            }
            else return this.Categories;
        },
        getSubCategories()
        {
            if(this.currentCategory != 0)
            {
            if(this.currentSubCategory != 0)
            {
                return this.SubCategories.filter((el)=> el.id == this.currentSubCategory )   
            }
                return this.SubCategories.filter((el) => el.c_id == this.currentCategory )   
            }
                this.currentSubCategory = 0;
                this.tableConstrToCalc = null;
                
        },
        getItems()
        {
            if(this.currentSubCategory != 0)
            {
            if(this.currentItems != 0)
            {
                let item = this.Items.filter((el) => el.id == this.currentItems && el.c_id == this.currentSubCategory );
                item.forEach((element) => 
            {
                this.template = element.template;
                this.tableConstrToCalc = 1;
                this.currentConstr = element.ag_id;
                
            });
            
            
                return item;
            }
                this.template = null;
                this.visible =false;
                return this.Items.filter((el) => el.c_id == this.currentSubCategory )
            }
                this.currentItems = 0;
                this.template = null;
                this.visible =false;
                this.dFrame = false;

                this.constR = { ...this.constRZero};
        },
       
      
    },
    
    methods: {
        filterVariable(variable) {
            // Проверяем, является ли первый символ цифрой
            if (/^\d/.test(variable)) {
              return variable;
            } else {
              return "---";
            }
          },
        getStartParam(){

            this.unvisible = !this.unvisible;
        },
        delFromOpenings(index){
            this.constrSent.Openings.splice(index, 1);
        },
        getOpeningType(Type){
            if(Type == 'OST_Doors') return 'дверь'
            return 'окно'
        },
        addOpening(){
                this.constrSent.Openings.push({...this.opening});
                console.log(this.constrSent.Openings);
                this.opening = {...this.openingZero};
        },
        setConstrFromCalcToSent(){
                this.constR.step = +this.profileStep;
                this.constrSent.Code = this.currentConstr;
                this.constrSent.LenX = this.constR.lenX;
                this.constrSent.LenY = this.constR.lenY;
                this.constrSent.LenZ = this.constR.lenZ;
                this.constrSent.step = this.constR.step;
                this.constrSent.dframe = this.dFrame;
        },
        delConstrFromList(idConstr)
        {   
            let indexToDel = this.ConstrToCalc.findIndex((el)=>el.key_id == idConstr);
            this.ConstrToCalc.splice(indexToDel ,1);
            this.ConstrToCalcToSent.splice(indexToDel ,1);
            // this.ConstrToCalc = this.ConstrToCalc.filter((el) => el.key_id != idConstr)
            // this.ConstrToCalc = this.ConstrToCalc.filter((el) => el.key_id != idConstr)
            this.calcConstruction(this.ConstrToCalcToSent);

        },
        checkInput(){

            if(this.currentSubCategory == 'W'){
                objectX = (this.SizeLimits.find(el => el.id_constr == this.currentItems && el.step == this.profileStep  ));
                max_constr_size = objectX.max_lenZ;
              
                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 100) return '<span class="p1">Введите правильную ширину</span> <br> Минимальная ШИРИНА конструкции 100 мм' ;
                else if(+this.constR.lenX > 50000) return '<span class="p1">Введите правильную ширину</span> <br> В конструкциях ШИРИНОЙ свыше 15 метров необходимо устраивать температурные(деформационные) швы';
                else if(isNaN(+this.constR.lenZ) || +this.constR.lenZ < 100) return '<span class="p1">Введите правильную высоту</span> <br> Минимальная ВЫСОТА конструкции 100 мм';
                else if(+this.constR.lenZ > max_constr_size) return '<span class="p1">Введите правильную высоту</span> <br>Максимальная ВЫСОТА конструкции указана в меню выбора шага профиля';
            }
            else if(this.currentSubCategory == 'L' && this.template != 6){
                objectX = (this.SizeLimits.find(el => el.id_constr == this.currentItems && el.step == this.profileStep  ));
                max_constr_size = objectX.max_lenZ;
              
                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 100) return '<span class="p1">Введите правильную ширину</span> <br>Минимальная ШИРИНА конструкции 100 мм';
                else if( +this.constR.lenX > 50000) return '<span class="p1">Введите правильную ширину</span> <br>В конструкциях ШИРИНОЙ свыше 15 метров необходимо устраивать  температурные(деформационные) швы';
                else if(isNaN(+this.constR.lenZ) || +this.constR.lenZ < 100) return '<span class="p1">Введите правильную высоту</span> <br>Минимальная ВЫСОТА конструкции 100 мм';
                else if( +this.constR.lenZ > max_constr_size ) return '<span class="p1">Введите правильную высоту</span> <br>Максимальная ВЫСОТА конструкции указана в меню выбора шага профиля';
            }
            else if(this.currentSubCategory == 'L' && this.template == 6){
                objectX = (this.SizeLimits.find(el => el.id_constr == this.currentItems && el.step == this.profileStep  ));
                max_constr_size = objectX.max_lenZ;
              
                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 200) return '<span class="p1">Введите правильную ширину</span> <br>Минимальный размер обрезанной панели ЗИПС,пригодной к монтажу,составляет 200 мм.На обрезанном фрагменте должны присутствовать минимум 2 виброузла и 2 регулиремые опоры для панелей ЗИПС-Z4';
                else if(+this.constR.lenX > 50000 ) return '<span class="p1">Введите правильную ширину</span> <br>В конструкциях ШИРИНОЙ свыше 15 метров необходимо устраивать температурные(деформационные) швы';
                else if(isNaN(+this.constR.lenZ) || +this.constR.lenZ < 200) return '<span class="p1">Введите правильную высоту</span> <br>Минимальный размер обрезанной панели ЗИПС,пригодной к монтажу,составляет 200 мм.На обрезанном фрагменте должны присутствовать минимум 2 виброузла и 2 регулиремые опоры для панелей ЗИПС-Z4';
                else if(  +this.constR.lenZ > max_constr_size) return '<span class="p1">Введите правильную высоту</span> <br>При монтаже панельной системы ЗИПС на ВЫСОТУ более 6 м рекомендуется устраивать деформационный шов  ';
            }
            else if(this.currentSubCategory == 'C' && this.template == 5){

                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 250) return '<span class="p1">Введите правильную ширину</span> <br>Минимальная ШИРИНА конструкции 250 мм' ;
                else if(+this.constR.lenX > 50000) return '<span class="p1">Введите правильную ширину</span> <br>В конструкциях ШИРИНОЙ свыше 15 метров необходимо устраивать температурные(деформационные) швы';
                else if(isNaN(+this.constR.lenY) || +this.constR.lenY < 250) return '<span class="p1">Введите правильную длину</span> <br>Минимальная ДЛИНА конструкции 250 мм';
                else if(+this.constR.lenY > 50000) return '<span class="p1"><span class="p1">Введите правильную длину</span></span> <br>В конструкциях ДЛИНОЙ свыше 15 метров необходимо устраивать температурные(деформационные) швы' ;
            }
            else if(  this.currentSubCategory == 'F' && this.template != 111 && this.template != 3){

                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 500) return '<span class="p1">Введите правильную ширину</span> <br>Минимальная ШИРИНА конструкции 500 мм' ;
                else if(+this.constR.lenX > 30000) return '<span class="p1">Введите правильную ширину</span> <br>Деформационные и термоусадочные швы устраиваются по необходимости в соответсвии с требованиями СП 29.13330.2011. Расстояние между деформационными швами не должно превышать 18 метров';
                else if(isNaN(+this.constR.lenY) || +this.constR.lenY < 500) return '<span class="p1">Введите правильную длину</span> <br>Минимальная ДЛИНА конструкции 500 мм';
                else if( +this.constR.lenY > 30000 ) return '<span class="p1">Введите правильную длину</span> <br>Деформационные и термоусадочные швы устраиваются по необходимости в соответсвии с требованиями СП 29.13330.2011. Расстояние между деформационными швами не должно превышать 18 метров';
            }
            else if(  this.currentSubCategory == 'F' && this.template == 111){

                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 200) return '<span class="p1">Введите правильную ширину</span> <br>Обрезанные панели ЗИПС ШИРИНОЙ менее 200 мм не используются' ;
                else if(+this.constR.lenX > 30000) return '<span class="p1">Введите правильную ширину</span> <br>Акустические швы в обязательном порядке устраиваются в дверных проемах,а также в местах сооружения звукоизоляционных перегородок';
                else if(isNaN(+this.constR.lenY) || +this.constR.lenY < 200) return '<span class="p1">Введите правильную длину</span> <br>Обрезанные панели ЗИПС ДЛИНОЙ менее 200 мм не используются';
                else if(+this.constR.lenY > 30000) return '<span class="p1">Введите правильную длину</span> <br>Акустические швы в обязательном порядке устраиваются в дверных проемах,а также в местах сооружения звукоизоляционных перегородок';
            }
            else if(  this.currentSubCategory == 'F' && this.template == 3){

                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 500) return '<span class="p1">Введите правильную ширину</span> <br>Минимальная ШИРИНА конструкции 500 мм' ;
                else if(+this.constR.lenX > 30000) return '<span class="p1">Введите правильную ширину</span> <br>Акустические швы в обязательном порядке устраиваются в дверных проемах,а также в местах сооружения звукоизоляционных перегородок';
                else if(isNaN(+this.constR.lenY) || +this.constR.lenY < 500) return '<span class="p1">Введите правильную длину</span> <br>Минимальная ДЛИНА конструкции 500 мм';
                else if(+this.constR.lenY > 30000 ) return '<span class="p1">Введите правильную длину</span> <br>Акустические швы в обязательном порядке устраиваются в дверных проемах,а также в местах сооружения звукоизоляционных перегородок';
            }
            else if(this.currentSubCategory == 'C' && this.template == 4){

                if(isNaN(+this.constR.lenX) || +this.constR.lenX < 200) return '<span class="p1">Введите правильную ширину</span> <br>Минимальный размер обрезанной панели ЗИПС,пригодной к монтажу,составляет 200 мм.На обрезанном фрагменте должны присутствовать минимум 2 виброузла и 2 регулиремые опоры для панелей ЗИПС-Z4';
                else if(+this.constR.lenX > 50000 ) return '<span class="p1">Введите правильную ширину</span> <br>Акустические швы в обязательном порядке устраиваются в дверных проемах,а также в местах сооружения звукоизоляционных перегородок ';
                else if(isNaN(+this.constR.lenY) || +this.constR.lenY < 200) return '<span class="p1">Введите правильную длину</span> <br>Минимальный размер обрезанной панели ЗИПС,пригодной к монтажу,составляет 200 мм.На обрезанном фрагменте должны присутствовать минимум 2 виброузла и 2 регулиремые опоры для панелей ЗИПС-Z4';
                else if(+this.constR.lenY > 50000 ) return '<span class="p1">Введите правильную длину</span> <br>Акустические швы в обязательном порядке устраиваются в дверных проемах,а также в местах сооружения звукоизоляционных перегородок';
            }
            return null;
           
        } ,
        calcConstruction(constrList)
        {
            this.request('http://158.160.73.203:3005/api/v1/calcQuantity', 'post', constrList, (data) => this.calculatedMaterials = data)
        },
        addConstrToCalc() 
        {
            if(this.checkInput() == null){  
                let IconType = this.SubCategories.find((el)=>el.id == this.currentSubCategory); 
                this.constR.imgBlack = IconType.imgBlack;

                let Description = this.Items.find((el)=>el.id == this.currentItems); 
                this.constR.description = Description.description;

                // let Id = this.Items.find((el)=>el.id == this.currentItems); 
                // this.constR.id = Id.id;
                this.constR.key_id = Date.now();
                
                let Constr = this.Items.find((el)=>el.id == this.currentItems); 
                this.constR.title = Constr.title;

                let ConstrType = this.SubCategories.find((el)=>el.id == this.currentSubCategory);
                this.constR.type = ConstrType.title;

                let ConstrId = this.Items.find((el)=>el.id == this.currentItems);
                this.constR.ag_id = ConstrId.ag_id;

                let StepProfile = this.Items.find((el)=>el.id == this.currentItems);
                this.constR.step = StepProfile.step;
                
                this.setConstrFromCalcToSent();
                console.log(this.currentConstr);
                // this.constrSent.dframe = this.constR.description;
                // this.constrSent.Area = this.constR.ag_id;
                // this.constrSent.Perimeter = this.constR.Perimeter;
                // this.constrSent.step = this.constR.step;

                this.ConstrToCalcToSent.push({...this.constrSent});
                this.constrSent = { ...this.constSentZero};
                this.opening = {...this.openingZero};
                this.ConstrToCalc.push({...this.constR}); 
                console.log(this.ConstrToCalc);
                this.constR = { ...this.constRZero};
                this.dFrame = false;
                this.calcConstruction(this.ConstrToCalcToSent);
                console.log(this.ConstrToCalcToSent);
                this.unvisible = false;
                
            }
            
            else{
                swal({
                    title: "<small > </small>",
                    text:  this.checkInput(),
                    imageUrl: "img/logo_A.png",
                    html: true,
                    imageSize:"120x120",
                    confirmButtonColor:"#248cb9",
                    // customClass:null,
                  });
            }
        },   
        changeSubCategory(e)
        {
            this.currentSubCategory = e.target.value;
        },
        changeItems(e)
        {
            this.currentItems = e.target.value;
        },

        async  request(url, method, data, callback)
        {
            let setting = null;
        
            if(method != 'get')
                setting = {
                    method,
                    body: JSON.stringify(data)
                }
        
            let res = await fetch(url, setting);   
            let res_data  = await res.json() //json parse
        
            callback(res_data);
        },
       
    }
}
Vue.createApp(App).mount('#app');