/*global angular*/
(function () {
  'use strict';
  var app = angular.module('app')
      .constant('Configuration', {

        API_VERSIONS: {
          V1: '/api/v1'
        },
        ASSET_MENU_OPTIONS: [
          'multifunctionMono',
          'fax',
          'scanner',
          'plotter',
          'lock',
          'notes',
          'photo',
          'user',
          'printMono'
        ],
        ATTACHMENT_TYPES: [
          'application/vnd.ms-excel',
          'audio/aac',
          'application/x-abiword',
          'video/x-msvideo',
          'application/octet-stream',
          'text/csv',
          'application/msword',
          'image/gif',
          'image/x-icon',
          'image/jpeg',
          'audio/midi',
          'video/mpeg',
          'audio/ogg',
          'video/ogg',
          'image/png',
          'application/pdf',
          'application/vnd.ms-powerpoint',
          'audio/x-wav',
          'audio/webm',
          'video/webm',
          'image/webp',
          'application/xml',
          'video/3gpp',
          'audio/3gpp',
          'video/3gpp2',
          'audio/3gpp2',
          'image/pjpeg',
          'image/jpg',
          'image/tiff',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/vnd.ms-word.document.macroenabled.12',
          'audio/mp3',
          'text/plain',
          'application/x-zip-compressed',
          'application/x-compressed',
          'application/zip',
          'multipart/x-zip',
          'application/x-rar-compressed',
          'application/x-tar',
          'application/x-gzip',
          'audio/mpeg3',
          'audio/x-mpeg-3',
          'video/x-mpeg',
          'audio/wav',
          'audio/x-wav',
          'application/mspowerpoint',
          'application/powerpoint',
          'application/x-mspowerpoint',
          'application/vnd.ms-xpsdocument',
          'image/vnd.dxf',
          'application/postscript',
          'image/vnd.adobe.photoshop',
          'application/postscript',
          'application/postscript',
          'image/svg+xml',
          'image/x-tiff',
          'application/x-font-ttf',
          'image/bmp',
          'application/mp4',
          'video/quicktime',
          'application/x-troff-msvideo',
          'video/avi',
          'video/msvideo',
          'video/x-ms-wmv',
          'video/x-flv',
          'application/vnd.ms-excel.sheet.macroEnabled.12',
          'application/msexcel',
          'application/x-msexcel',
          'application/x-ms-excel',
          'application/x-excel',
          'application/x-dos_ms_excel',
          'application/xls',
          'application/x-xls'
        ],
        ASSET_PRICING_FILE_NAME: 'Pricing Table',
        ASSET_STATES: {
          REAL: 'real',
          VIRTUAL: 'virtual'
        },
        MAX_AUTOCOMPLETE_RESULT: 50,
        BASE_IMAGE: 'img/grid-paper.png', //default base image when no floor map is available
        CONFIDENCE: {
          HIGH: 'Confidence 1-High',
          MEDIUM: 'Confidence 2-Medium',
          LOW: 'Confidence 3-Low'
        },
        CONNECTION_TYPE: {
          NETWORK: 'network',
          LOCAL: 'local',
          BOTH: 'both'
        },
        CULTURES: ['SOUTH ASIA', 'NORTH AMERICA'],
        CURRENCIES: ['EURO', 'USD', 'INR', 'DINAR'],
        CPP_MONTHLY_SAVINGS: 'cppMonthlySavings($)',
        deviceTypes: {
          fax: 'fax',
          lock: 'lock',
          multifunctionColor: 'multifunctionColor',
          multifunctionMono: 'multifunctionMono',
          notes: 'notes',
          photo: 'photo',
          plotter: 'plotter',
          printColor: 'printColor',
          printMono: 'printMono',
          scanner: 'scanner',
          unknown: 'unknown',
          user: 'user'
        },
        dispositionIntentions: {
          maiKeep: 'maiKeep',
          assetTransferKeep: 'assetTransferKeep',
          excludeDevice: 'excludeDevice',
          replaceOneForOne: 'replaceOneForOne',
          replaceConsolidate: 'replaceConsolidate',
          replaceConsolidateHcd: 'replaceConsolidateHcd',
          replacePrescriptiveRules: 'replacePrescriptiveRules',
          replaceTemplateRules: 'replaceTemplateRules',
          eliminate: 'eliminate'
        },
        DISCOVERY_TOOLS: [
          "defaultDcaTemplate",
          "orion"
        ],
        DEFAULT_DATA_SET_MODEL: {
          printTechnology: '',
          productId: '',
          productNumber: '',
          isMpsSupported: '',
          productModelName: '',
          hasA4: false,
          dateIntroduced: '',
          updateDate: '',
          dutyCycle: '',
          numberOfTrays: '',
          speedColor: '',
          speedMono: '',
          printCapabilityType: '',
          technologyType: ''
        },
        DEFAULT_EXPORT_FILE_NAME: 'Export',
        DEFAULT_MONTHLY_VOLUME_SPLIT: 50,
        //English is default language in Cartos.
        DEFAULT_LANG: {
          NAME: "partName",
          KEY: "key"
        },
        DEFAULT_RMPV: 5000,
        DEFAULT_DATE_FORMAT: 'mm/dd/yyyy',
        //Default deal term
        DEFAULT_DEAL_TERM: 60,
        DEFAULT_COLOR_SPLIT_PERCENTAGE: 5,
        //Supported floor types.
        FALSE: "false",
        FLOOR_TYPES: [
          'image/gif',
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/tiff',
          'application/pdf'
        ],
        //Supported Asset and Service Alert file type(CSV)
        FLEET_TYPE: [
          'application/vnd.ms-excel'
        ],
        HTTP_STATUS_OK: 200,
        HTTP_STATUS_NOT_FOUND: 404,
        ICON_IMAGE_PATH: '../../img/icons/',
        LEVEL_PRIORITIES: ['HIGH', 'MED', 'LOW'],
        MATCH: 'match',
        MAX_FILE_SIZE: 10485760, //10MB
        MPS_SUPPORTED: {
          YES: 'yes',
          NO: 'no',
          UNKNOWN: 'unknown'
        },
        NO_ASM_ERROR: 'NO_ASM',
        FILE_SIZE_1MB: 1048576, //1MB
        OUTCOME_MENU_OPTIONS: [
          'replace',
          'reset',
          'repositionTo',
          'retire',
          'reposition',
          'retain'
        ],
        PLOTTED_ASSETS_FILE_NAME: 'Plotted Assets',
        TRANSFER: {
          MONO: 'mono',
          MONOA3: 'monoA3',
          MONOA4: 'monoA4',
          COLOR: 'color',
          COLORA3: 'colorA3',
          COLORA4: 'colorA4',
          FAX: 'fax',
          MONO_COLOR: 'monoColor',
          FAX_COLOR: 'faxColor',
          PLOTTER_COLOR: 'plotterColor',
          PLOTTER: 'plotter'
        },
        ASSET_AGE: {
          FIVE: 5,
          TEN: 10
        },

        TRANSITION_NAME: 'transition1',
        _ID: '_id',

        //Price Table file type (XLSX)
        PRICING_SOURCE: {
          DART: 'DART',
          OTHER: 'other'
        },
        PRICING_TABLE_FILE_TYPE: [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ],
        PRECISION_ONE: 1,
        PRECISION_TWO: 2,
        PRECISION_FIVE: 5,
        CDF_TABLE_FILE_TYPE: [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/vnd.ms-excel.sheet.macroEnabled.12'
        ],
        RESTRICTED_PAGES: [
          'app/views/admin-panel.html',
          'api/v1/users'
        ],
        STATES: {
          CURRENT: 'current',
          TRANSITION: 'transition',
          FUTURE: 'future'
        },
        //Default value for projectId if not available
        NOT_IN_BIRD_VIEW: 'creating Project',
        //Duration(in hours) after which session will be expired.
        SESSION_TIME_OUT: 24,
        //List of browsers which we are supporting in Cartos.
        SUPPORTED_BROWSERS: ['Chrome', 'CriOS'],
        TRIVIAL_ASSETS: [
          'lock',
          'notes',
          'photo',
          'user'
        ],
        TRIVIAL_ASSET_SCALE_FACTOR: 0.7,
        //limit for the zoom.
        ZOOM: {
          MAX: 4,
          MIN: 0.1,
          END_DELAY: 500
        },
        DEFAULT_ORIGIN: {
          x: 0,
          y: 0
        },
        DONT_POPULATE: [
          'state'
        ],
        DEFAULT_PRICING: 'project',
        PRICING: {
          currentMonoCPP: 'dynamicModel.currentMonoCPP',
          currentColorCPP: 'dynamicModel.currentColorCPP',
          proposedMonoCPP: 'dynamicModel.proposedMonoCPP',
          proposedColorCPP: 'dynamicModel.proposedColorCPP',
          currentColorProCPP: 'dynamicModel.currentColorProColorCPP',
          proposedColorProCPP: 'dynamicModel.proposedColorProCPP',
          currentColorProMonthlyVolume: 'dynamicModel.currentColorProMonthlyVolume',
          proposedColorProMonthlyVolume: 'dynamicModel.proposedColorProMonthlyVolume',
          currentBaseMonthlyCost: 'dynamicModel.currentBaseMonthlyCost',
          proposedBaseMonthlyCost: 'dynamicModel.proposedBaseMonthlyCost'
        },
        ASSET_LEVELS: {
          PROJECT: 'project',
          COUNTRY: 'country',
          SITE: 'site',
          BUILDING: 'building',
          FLOOR: 'floor'
        },
        PERMISSION: {
          OWNER: 'own',
          EDIT: 'edit',
          REVOKE: 'revoke',
          ALLOW: 'allow',
          VIEW: 'view'
        },
        TRUE: "true",
        TENANTS: {
          CARTOS_TENANT: {displayValue: 'CARTOS_TENANT', actualValue: 'cartos_tenant'},
          CARTOS_ITT: {displayValue: 'ITT_TENANT', actualValue: 'cartos_itt'}
        },
        AUTH_STRATEGY_TYPES: {
          LOCAL: {displayValue: 'Non-HP', actualValue: 'LOCALDB'},
          LDAP: {displayValue: 'HP', actualValue: 'LDAP'}
        },
        ROLE_BASE_ACCESS: {
          AUTH_STRATEGY_TYPES: {
            LOCAL: {displayValue: 'LOCAL DB', actualValue: 'LOCALDB'},
            LDAP: {displayValue: 'LDAP', actualValue: 'LDAP'}
          }
        },
        USER_TYPE: {
          HP_USER: 'HpUser',
          NON_HP_USER: 'NonHpUser'
        },
        DEFAULT_CMO: 0,
        DEFAULT_FMO: 0,
        DEFAULT_ACCESSORIES: [
          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "Duplex"
          },
          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "Staple"
          },
          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "Stacker"
          },
          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "Hole Puncher"
          },
          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "Booklet Maker"
          },
          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "Mail Bin"
          },

          {
            "CMO": 0,
            "FMO": 0,
            "accessoryNumber": '',
            "description": "HCI"
          }
        ],
        EXCLUDE_FROM_DECRYPTION_DDS: {
          make: 'make',
          model: 'model',
          productNumber: 'productNumber',
          isMpsSupported: 'isMpsSupported'
        },
        EXCLUDE_FROM_DECRYPTION_HP: {
          make: 'make',
          model: 'model',
          productNumber: 'productNumber',
          _id: '_id',
          productId: 'productId'
        },
        REPLACED_ASSETS_LOCATION: {
          atCurrentState: 'atCurrentState',
          atTransitionState: 'atTransitionState'
        },
        PLOT_STATUS_IMAGE: {
          plotted_img: 'bluePin',
          placed_img: 'greenPin',
          unplotted_img: 'defaultPin'
        },
        replacementAsset: 'replacementAsset',
        projectSettings: {
          dealSettings: 'dealSettings',
          term: 'term',
          colorSplitPercentage: 'colorSplitPercentage'
        },
        IMPERSONATE_IN: 'ImpersonateIn',
        IMPERSONATE_OUT: 'ImpersonateOut',
        IS_PERFORMANCE_LOG_ENABLED: false,
        LOGIN: 'Login',

        defaultTemplate: 'Default template',
        previewHeaders: 2,
        ampvCalculationMethod: {
          fromReadingTab: 0,
          fromDCA: 1,
          fromDateInstalled: 2,
          fromDateManufactured: 3,
          fromDateIntroduced: 4,
          avgValueOfRealAssets: 5,
          asRMPV: 6,
          notFound: 7
        },
        ampvCalculationMethodDescription: [
          '',
          'AMPV_CALCULATED_FROM_DCA',
          'AMPV_CALCULATED_FROM_DATE_INSTALLED',
          'AMPV_CALCULATED_FROM_DATE_MANUFACTURED',
          'AMPV_CALCULATED_FROM_INTRO_DATE',
          'AMPV_CALCULATED_FROM_AVERAGE',
          'AMPV_AS_RMPV',
          ''
        ],
        STACK_NAME: {
          "CARTOS_DESIGN_DOT_COM": "www.cartosdesign.com"
        },
        ampvAverageMinimumCount: 3,
        mandatoryDcaColumns: ['Model'],
        ServerMaintenanceMessageTime: [
          30,
          15,
          5,
          1
        ],
        pricingSourcesHp: {
          Manual: 'Manual',
          DART: 'DART',
          TCO: 'TCO'
        },
        pricingSources: {
          Manual: 'Manual"',
          TCO: 'TCO'
        },
        defaultPricingSettings: {
          pricingSource: 'Manual',
          currency: 'USD'
        },
        currencyOptions: {
          USD: 'USD',
          LC: 'LC'
        },
        defaultZoneTagId: "507f191e810c20169de860ea",
        //TODO: move the entire device list control to role based.
        deviceSourceList: {
          hpMpsSalable: "HP_MPS_SALABLE_LIST",
          basketOfGoods: "BASKET_OF_GOODS"
        },
        deviceSourceNonHP: {
          hpMpsSalable: "HP_MPS_SALABLE_LIST"
        },
        deviceLists: {//for DDS
          hpMpsSalable: 'hpMpsSalable'
        },
        defaultDeviceList: "hpMpsSalable",
        basketOfGoodsLimit: 10,
        defaultCountry: {
          currencyCode: "UD",
          Description: "US Dollars",
          isoCurrencyCode: "USD",
          rate: "1"
        },
        ROLES: {
          "NON_HP_RESELLER": "nonHpReseller"
        },
        labelStrokeWidths: [
          1, 2, 3, 4, 5
        ],
        replace: 'replace',
        replaceSubtype: {
          ManyToOne: "ManyToOne",
          OneForOne: "OneForOne"
        },
        onlineDb: {
          assets: "assets"
        },
        ampvSettings: {
          colorSplitVolume: 50,
          dcaAutoCalc: true,
          clickAutoCal: false
        }
      });
}());