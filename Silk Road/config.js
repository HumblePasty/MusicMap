var config = {
  style: 'mapbox://styles/zenc/ckxpqbw7e64kq15qzf07m3qjk',
  accessToken:
    'pk.eyJ1IjoiemVuYyIsImEiOiJja3g4OW9ydm0yamxzMm9wbjdmM2Y4ZnV3In0.0dL8-UtQlgoInW5bG9SQ5A',
  showMarkers: false,
  markerColor: '#3FB1CE',
  theme: 'dark',
  use3dTerrain: false,
  title: '丝绸之路——沿路的民族音乐',
  subtitle: '',
  byline: 'By Team River',
  footer:
    '形成于两汉时期的丝绸之路，不仅是东西方商贸交易之路，更是中国和亚欧各国政治、文化、艺术交流的通道。',
  chapters: [
    {
      id: 'beginning',
      alignment: 'right',
      hidden: true,
      title: '丝绸之路',
      image: '',
      description:
        '形成于两汉时期的丝绸之路，不仅是东西方商贸交易之路，更是中国和亚欧各国政治、文化、艺术交流的通道。',
      location: {
        center: [102.738, 38.009],
        zoom: 3.4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: 'other-identifier',
      alignment: 'left',
      hidden: false,
      title: '陕西',
      image: '',
      description:
        '<a href="http://sczl.cdcgcart.cn/sczl/src/bandAreas/index.html?areaCode=1856&areaText=%25E7%25A7%25A6%25E8%2585%2594">秦腔、西安鼓乐、陕北民歌、陕北说书、陕北唢呐、眉户、户县曲子、碗碗腔、西府曲子、榆林小曲和陕北道情等。',
      location: {
        center: [108.8, 34.337],
        zoom: 10.13,
        pitch: 70,
        bearing: -75,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'other-identifier2',
      alignment: 'right',
      hidden: false,
      title: '甘肃',
      image: '',
      description:
        '<a href="http://sczl.cdcgcart.cn/sczl/src/bandAreas/index.html?areaCode=1873&areaText=%25E7%25A7%25A6%25E5%25AE%2589%25E5%25B0%258F%25E6%259B%25B2">秦安小曲、通渭小曲、兰州鼓子、凉州贤孝、敦煌曲子、河西宝卷、宴席曲、花儿、临夏贤孝、裕固族民歌等',
      location: {
        center: [104.265, 36.286],
        zoom: 6.75,
        pitch: 60,
        bearing: 43.2,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'other-identifier3',
      alignment: 'left',
      hidden: false,
      title: '青海',
      image: '',
      description:
        '<a href="http://sczl.cdcgcart.cn/sczl/src/bandAreas/index.html?areaCode=1874">青海平弦、花儿等。',
      location: {
        center: [98, 38.044],
        zoom: 6,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'other-identifier4',
      alignment: 'right',
      hidden: false,
      title: '新疆',
      image: '',
      description:
        '<a href="http://sczl.cdcgcart.cn/sczl/src/bandAreas/index.html?areaCode=1875">北疆木卡姆、哈密木卡姆、多兰木卡姆、新疆鼓吹乐、哈萨克民歌和伊犁民歌等。',
      location: {
        center: [87.483, 43.893],
        zoom: 10.13,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
}
