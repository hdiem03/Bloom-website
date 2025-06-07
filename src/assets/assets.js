import aosomi1 from './Product/AoSoMi/aosomi1.png';
import aosomi1_2 from './Product/AoSoMi/aosomi1_2.png';

import aosomi2 from './Product/AoSoMi/aosomi2.png';
import aosomi3 from './Product/AoSoMi/aosomi3.png';
import aosomi4 from './Product/AoSoMi/aosomi4.png';

import dam1 from './Product/Dam/dam1.png';
import dam1_1 from './Product/Dam/dam1_1.png';
import dam1_2 from './Product/Dam/dam1_2.png';
import dam1_3 from './Product/Dam/dam1_3.png';
import dam1_nau from './Product/Dam/dam1_nau.png';
import dam1_nau_2 from './Product/Dam/dam1_nau_2.png';
import dam1_nau_3 from './Product/Dam/dam1_nau_3.png';
import dam1_nau_4 from './Product/Dam/dam1_nau_4.png';


import dam2 from './Product/Dam/dam2.png';
import dam2_1 from './Product/Dam/dam2_1.png';
import dam2_2 from './Product/Dam/dam2_2.png';
import dam2_3 from './Product/Dam/dam2_3.png';
import dam2_den from './Product/Dam/dam2_den.png';
import dam2_den_2 from './Product/Dam/dam2_den_2.png';

import dam3 from './Product/Dam/dam3.png';
import dam3_1 from './Product/Dam/dam3_1.png';
import dam3_2 from './Product/Dam/dam3_2.png';
import dam4 from './Product/Dam/dam4.png';
import dam4_2 from './Product/Dam/dam4_2.png';

import dam5 from './Product/Dam/dam5.png';
import dam6 from './Product/Dam/dam6.png';
import dam6_2 from './Product/Dam/dam6_2.png';

import dam7 from './Product/Dam/dam7.png';
import dam7_2 from './Product/Dam/dam7_2.png';

import dam8 from './Product/Dam/dam8.png';
import aokieu1 from './Product/AoKieu/aokieu1.png'
import aokieu2 from './Product/AoKieu/aokieu2.png'
import aokieu2_1 from './Product/AoKieu/aokieu2_1.png'

import aokieu3 from './Product/AoKieu/aokieu3.png'
import aokieu4 from './Product/AoKieu/aokieu4.png'
import aokieu5 from './Product/AoKieu/aokieu5.png'
import aokieu6 from './Product/AoKieu/aokieu6.png'

import aothun1 from './Product/AoThun/aothun1.png';
import aothun2 from './Product/AoThun/aothun2.png';
import aothun2_1 from './Product/AoThun/aothun2_1.png';
import aothun2_2 from './Product/AoThun/aothun2_2.png';
import aothun2_3 from './Product/AoThun/aothun2_3.png';
import aothun2_ghi from './Product/AoThun/aothun2_ghi.png';
import aothun2_ghi1 from './Product/AoThun/aothun2_ghi1.png';

import quan1 from './Product/Quan/quan1.png';
import quan2 from './Product/Quan/quan2.png';
import quan3 from './Product/Quan/quan3.png';
import quan4 from './Product/Quan/quan4.png';
import quan5 from './Product/Quan/quan5.png';
import quan6 from './Product/Quan/quan6.png';
import quan7 from './Product/Quan/quan7.png';
import quan8 from './Product/Quan/quan8.png';


import Logo from './Logo.png'
import emptycart from './emptycart.png'
import star_icon from './star_icon.png'
import Hero1 from './Hero/Hero1.png'
import Hero2 from './Hero/Hero2.png'
import Hero3 from './Hero/Hero3.png'
export const assets ={
  Logo,
  emptycart,
  star_icon,
  Hero1,
  Hero2,
  Hero3,


}

export const products = [
 
  {
    id: "1",
    name: "Đầm tencel nhún cổ chữ V",
    description: `Đầm 2 lớp dáng xòe dài, hai dây, cổ v, dây có chốt tăng giảm, nhún trang trí. 
      Đầm hai dây dáng xòe dài cùng chất liệu Tencel mềm mại giúp tạo độ rủ bồng bềnh, 
      tôn lên nét nữ tính và bay bổng cho người mặc. Phần cổ V sâu vừa phải,
      khéo léo tôn lên đường nét thanh thoát nơi phần cổ và xương quai xanh. `,
    price: 2290000,
    category: "Đầm",
    subcategory: "Đầm tencel",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 },
    ],
    color: [
      {
        name: 'Hồng',
        code: '#FFC0CB',
        image: [dam1, dam1_1, dam1_2, dam1_3]
      },
      {
        name: 'Nâu',
        code: '#d6ba73',
        image: [dam1_nau, dam1_nau_2,dam1_nau_3,dam1_nau_4]
      }
    ],
    sku: 10004219,
    latestProduct: true,
  },
  {
    id: "2",
    name: "Đầm tencel xếp nếp  cổ ngang",
    description: `Đầm 2 lớp dáng xòe dài, hai dây, cổ v, dây có chốt tăng giảm, nhún trang trí. 
      Đầm hai dây dáng xòe dài cùng chất liệu Tencel mềm mại giúp tạo độ rủ bồng bềnh, 
      tôn lên nét nữ tính và bay bổng cho người mặc. Phần cổ V sâu vừa phải,
      khéo léo tôn lên đường nét thanh thoát nơi phần cổ và xương quai xanh. `,
    price: 2290000,
    category: "Đầm",
    subcategory: "Đầm tencel",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Cam', 
        code: '#FF9933',
        image: [dam2, dam2_1, dam2_2, dam2_3],
      },

    ],
    sku: 10004232,
    latestProduct: true,
  },
  {
    id: "3",
    name: "Đầm tencel cổ ngang",
    description: `Đầm 2 lớp dáng xòe dài, hai dây, cổ v, dây có chốt tăng giảm, nhún trang trí. 
      Đầm hai dây dáng xòe dài cùng chất liệu Tencel mềm mại giúp tạo độ rủ bồng bềnh, 
      tôn lên nét nữ tính và bay bổng cho người mặc. Phần cổ V sâu vừa phải,
      khéo léo tôn lên đường nét thanh thoát nơi phần cổ và xương quai xanh. `,
    price: 1990000,
    category: "Đầm",
    subcategory: "Đầm tencel",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Hồng', 
        code: '#FFC0CB',
        image: [dam3, dam3_1, dam3_2],
      },
      {
        name: 'Đen', 
        code: '#000000',
        image: [dam2_den,dam2_den_2],
      },
      

    ],
    sku: 10004218,
    latestProduct: true,
  },
  {
    id: "4",
    name: "Đầm tencel cổ tim",
    description: `Đầm 2 lớp dáng xòe dài, hai dây, cổ v, dây có chốt tăng giảm, nhún trang trí. 
      Đầm hai dây dáng xòe dài cùng chất liệu Tencel mềm mại giúp tạo độ rủ bồng bềnh, 
      tôn lên nét nữ tính và bay bổng cho người mặc. Phần cổ V sâu vừa phải,
      khéo léo tôn lên đường nét thanh thoát nơi phần cổ và xương quai xanh. `,
    price: 2290000,
    category: "Đầm",
    subcategory: "Đầm tencel",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Hồng',
        code: '#FFC0CB',
        image: [dam4,dam4_2],
      },
    ],
    sku: 10004213,
    latestProduct: true,
  },
  {
    id: "5",
    name: "Áo kiểu đính hạt cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Thiết kế: Kẻ Sọc",
    price: 890000,
    category: "Áo",
    subcategory: "Áo kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [aokieu1],
      },

    ],
    sku: 10004743,
    latestProduct: true,
  },
  {
    id: "6",
    name: "Áo sơ mi thô cổ đức",
    description: "Chất liệu: Vải, Form: Oversize, Thiết kế: Kẻ Sọc",
    price: 1490000,
    category: "Áo",
    subcategory: "Áo sơ mi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Xanh', 
        code: '#0033FF',
        image: [aosomi1,aosomi1_2] 
      },

    ],
    sku: 10004454,
    bestSeller: true,
  },
  {
    id: "7",
    name: "Đầm tuytsi cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Thiết kế: Kẻ Sọc",
    price: 2490000,
    category: "Đầm",
    subcategory: "Đầm tuytsi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Hồng', 
        code: '#FFC0CB',
        image: [dam5], 
      },

    ],
    sku: 10004308,
  },
  {
    id: "8",
    name: "Áo thun giữ nhiệt cổ lọ",
    description: "Chất liệu: Vải, Form: Oversize, Thiết kế: Kẻ Sọc",
    price: 207000,
    category: "Áo",
    subcategory: "Áo thun",
    size: [
      { name: "S", quantity: 0 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Nâu', 
        code: '#d6ba73',
        image: [aothun2,aothun2_1,aothun2_2,aothun2_3],
      },
      {
        name: 'Ghi', 
        code: '#444444',
        image: [aothun2_ghi,aothun2_ghi1],
      },
    ],
    sku: 10003840,
    bestSeller: true,
  },
  {
    id: "9",
    name: "Đầm thô Logo cài cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Thiết kế: Kẻ Sọc",
    price: 2290000,
    category: "Đầm",
    subcategory: "Đầm tencel",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 },
      { name: "XL", quantity: 5 },
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [dam6,dam6_2],
      },

    ],
    sku: 10004207,
    bestSeller: true,
  },
  {
    id: "10",
    name: "Đầm Tuytxi cổ ngang",
    description: "Chất liệu: Vải, Form: Oversize, Thiết kế: Kẻ Sọc",
    price: 2290000,
    category: "Đầm",
    subcategory: "Đầm tuytsi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [dam7,dam7_2],
      },

    ],
    sku: 10004208,
  },  
  {
    id: "11",
    name: "Đầm Tuytxi chi tiết cổ tròn",
    description: `Đầm 2 lớp dáng xòe dài, hai dây, cổ v, dây có chốt tăng giảm, nhún trang trí. 
      Đầm hai dây dáng xòe dài cùng chất liệu Tencel mềm mại giúp tạo độ rủ bồng bềnh, 
      tôn lên nét nữ tính và bay bổng cho người mặc. Phần cổ V sâu vừa phải,
      khéo léo tôn lên đường nét thanh thoát nơi phần cổ và xương quai xanh. 
      Dây đầm có chốt tăng giảm độ dài, dễ dàng điều chỉnh linh hoạt theo dáng người, mang lại sự thoải mái tuyệt đối.`,
    price: 2290000,
    category: "Đầm",
    subcategory: "Đầm tuytsi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 },
      { name: "XL", quantity: 5 }
    ],
    color: [
      {
        name: 'Hồng', 
        code: '#FFC0CB',
        image: [dam8],
      },

    ],
    sku: 10004458,
  },  
  {
    id: "12",
    name: "Áo sơ mi tơ cổ đức",
    description: `Áo sơ mi 1 lớp dáng suông, tay ngắn, cổ đức, cúc đính máy, túi ốp. Áo sơ mi dáng suông kết hợp túi ốp tinh tế tạo 
                  nên tổng thể vừa giản dị vừa cuốn hút. Họa tiết Toile de Jouy in truyền nhiệt được xử lý sắc nét trên nền vải trắng, 
                  gợi lên nét lãng mạn cổ điển pha chút hiện đại – như một lời thì thầm dịu dàng của mùa hè nước Pháp. Chất liệu vải mềm mại, 
                  mỏng nhẹ và thoáng mát giúp nàng luôn cảm thấy dễ chịu trong những ngày nắng.`,
    price: 1290000,
    category: "Áo",
    subcategory: "Áo sơ mi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Hồng', 
        code: '#FFC0CB',
        image: [aosomi2],
      },

    ],
    sku: 10004424,
  }, 
  {
    id: "13",
    name: "Áo sơ mi lụa nhân tạo cổ đức",
    description: `Áo sơ mi 1 lớp dáng suông vừa, tay ngắn, cổ đức kiểu, cúc đính máy. Phần tay bồng nhẹ tạo điểm nhấn duyên dáng, 
                  đồng thời giúp tôn lên sự mềm mại cho đôi tay. Phom dáng suông vừa vặn, thoải mái, dễ dàng kết hợp cùng chân váy hoặc quần ống suông 
                  để hoàn thiện một diện mạo thanh thoát, phù hợp từ công sở đến những buổi hẹn hò nhẹ nhàng ngày hè. Thiết kế đơn giản nhưng tinh tế, 
                  dễ mặc và dễ ứng dụng trong nhiều hoàn cảnh.`,
    price: 1490000,
    category: "Áo",
    subcategory: "Áo sơ mi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Trắng', 
        code: '#FFFFFF',
        image: [aosomi3],
      },

    ],
    sku: 10004454,
  },
  {
    id: "14",
    name: "Áo sơ mi lụa tơ tằm cổ đức",
    description: 'Vải lụa tơ tằm',
    price: 2990000,
    category: "Áo",
    subcategory: "Áo sơ mi",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Hồng', 
        code: '#FFC0CB',
        image: [aosomi4],
      },

    ],
    sku: 10004454,
  }, 
  {
    id: "15",
    name: "Áo thun giữ nhiệt cổ lọ",
    description: `Áo thun 1 lớp dáng ôm, tay dài, cổ v kiểu, đính hoa . 
    Điểm nổi bật ở thiết kế nằm ở phần đính hạt  hoa cùng phom dáng ôm vào cơ thể, 
    khéo léo tôn lên đường nét cơ thể mà vẫn tạo sự thoải mái cho người mặc. 
    Với chiếc áo này thì chiếc quần âu dài hoặc chân váy dáng xòe sẽ luôn là sự ưu tiên.`,
    price: 387000,
    category: "Áo",
    subcategory: "Áo thun",
    size: [
      { name: "S", quantity: 0 },
      { name: "M", quantity: 0 },
      { name: "L", quantity: 0 }
    ],
    color: [
      {
        name: 'Hồng', 
        code: '#FFC0CB',
        image: [aothun1],
      },

    ],
    sku: 10003860,
  },  
  {
    id: "16",
    name: "Áo kiểu đũi Thêu  cổ đức",
    description: `Áo kiểu thêu , 1 lớp dáng suông, tay ngắn, cổ đức, túi ốp, thêu , thêu máy. 
    Thiết kế dáng suông mang lại cảm giác thoải mái, trong khi chi tiết thêu được xử lý khéo léo giúp tạo điểm nhấn nghệ thuật trên nền vải đũi mộc mạc. `,
    price: 387000,
    category: "Áo",
    subcategory: "Áo kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Trắng', 
        code: '#FFFFFF',
        image: [aokieu2,aokieu2_1],
      },

    ],
    sku: 10004499,
    bestSeller: true,
  },
  {
    id: "17",
    name: "Áo kiểu thô cổ ngang",
    description: `Áo kiểu  nhún eo, 1 lớp dáng suông, tay ngắn, cổ thuyền.`,
    price: 1290000,
    category: "Áo",
    subcategory: "Áo kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 },
      { name: "XL", quantity: 5 }
    ],
    color: [
      {
        name: 'Trắng', 
        code: '#FFFFFF',
        image: [aokieu3],
      },

    ],
    sku: 10004206,
  },
  {
    id: "18",
    name: "Áo kiểu đũi Thêu ",
    description: `Áo kiểu 1 lớp dáng suông ngắn, sát nách, cổ tròn, cài cúc cổ sau, thêu , thêu máy.`,
    price: 1290000,
    category: "Áo",
    subcategory: "Áo kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [aokieu4],
      },

    ],
    sku: 10004378,
  },
  {
    id: "19",
    name: "Áo kiểu thô cổ chữ V",
    description: `Áo len dáng ôm vừa, tay dài, cổ tròn, khóa sau giọt lệ, 
    dây  quanh viền cổ áo và cổ tay. Thiết kế basic dễ mặc cùng quần jeans hoặc chân váy thanh lịch.`,
    price: 267000,
    category: "Áo",
    subcategory: "Áo kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Trắng', 
        code: '#FFFFFF',
        image: [aokieu5],
      },

    ],
    sku: 10002806,
  },  
  {
    id: "20",
    name: "Áo kiểu đũi cổ tròn",
    description: `Áo kiểu dáng ôm vừa, tay dài, cổ tròn, khóa sau giọt lệ, 
    dây  quanh viền cổ áo và cổ tay. Thiết kế basic dễ mặc cùng quần jeans hoặc chân váy thanh lịch.`,
    price: 750000,
    category: "Áo",
    subcategory: "Áo kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Trắng', 
        code: '#FFFFFF',
        image: [aokieu6],
      },

    ],
    sku: 10000435,
  },  
  {
    id: "21",
    name: "Quần ống suông đũi",
    description: `Quần 1,5 lớp dáng ống suông dài, 
    cạp chun sau, khóa trước, cúc, túi ốp/túi dọc. Quần dáng ống suông dài với phần cạp chun sau giúp tăng độ thoải mái khi mặc, 
    đồng thời giữ phom dáng chỉnh chu suốt ngày dài.`,
    price: 990000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Ghi', 
        code: '#444444',
        image: [quan1],
      },

    ],
    sku: 10004379,
  }, 
  {
    id: "22",
    name: "Quần ống suông đũi",
    description: `Quần 1,5 lớp dáng ống suông dài, 
    cạp chun sau, khóa trước, cúc, túi ốp/túi dọc. Quần dáng ống suông dài với phần cạp chun sau giúp tăng độ thoải mái khi mặc, 
    đồng thời giữ phom dáng chỉnh chu suốt ngày dài.`,
    price: 1290000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Xanh', 
        code: '#0033FF',
        image: [quan2],
      },

    ],
    sku: 10004379,
  }, 
  {
    id: "23",
    name: "Quần ống suông đũi",
    description: `Quần 1,5 lớp dáng ống suông dài, 
    cạp chun sau, khóa trước, cúc, túi ốp/túi dọc. Quần dáng ống suông dài với phần cạp chun sau giúp tăng độ thoải mái khi mặc, 
    đồng thời giữ phom dáng chỉnh chu suốt ngày dài.`,
    price: 1490000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Xanh', 
        code: '#0033FF',
        image: [quan3],
      },

    ],
    sku: 10004215,
  }, 
  {
    id: "24",
    name: "Quần ống suông đũi",
    description: `Quần dáng ống suông dài, cạp rời, khóa trước, cúc, túi chéo/túi cơi giả. 
    Thiết kế tôn dáng, khéo léo kéo dài chân hiệu quả. Dễ mặc cùng các items áo sơ mi, áo giữ nhiệt và áo khoác linh hoạt.`,
    price: 387000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Nâu', 
        code: '#d6ba73',
        image: [quan4],
      },

    ],
    sku: 10003717,
  }, 
  {
    id: "25",
    name: "Quần soóc Tuytxi Kẹp ren",
    description: `Quần soóc kẹp ren , 1 lớp dáng ống suông ngắn , cạp rời, khóa sườn, móc, túi dọc. 
    Sự kết hợp giữa vẻ năng động của quần soóc và nét mềm mại từ chi tiết ren mang đến thiết kế vừa trẻ trung, vừa nữ tính.`,
    price: 1190000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [quan5],
      },

    ],
    sku: 10004461,
  },
  {
    id: "26",
    name: "Quần soóc Tuytxi",
    description: `Quần soóc kẹp ren , 1 lớp dáng ống suông ngắn , cạp rời, khóa sườn, móc, túi dọc. 
    Sự kết hợp giữa vẻ năng động của quần soóc và nét mềm mại từ chi tiết ren mang đến thiết kế vừa trẻ trung, vừa nữ tính.`,
    price: 1190000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [quan7],
      },

    ],
    sku: 10004461,
  },
  {
    id: "27",
    name: "Quần âu Tuytxi",
    description: `Quần 2 lớp dáng ống suông ngắn, cạp rời, khóa sườn, móc, túi dọc, túi ốp có nắp.`,
    price: 990000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Trắng', 
        code: '#FFFFFF',
        image: [quan6],
      },

    ],
    sku: 10004423,
  },
  {
    id: "28",
    name: "Quần âu Tuytxi",
    description: `Quần âu 1 lớp, dáng ống côn, cạp rời, khóa trước, cúc, móc, túi dọc. 
    Thiết kế ôm vừa vặn từ trên xuống dưới tạo nên vẻ ngoài thanh thoát, gọn gàng và vô cùng thời thượng.`,
    price: 1290000,
    category: "Quần",
    subcategory: "Quần kiểu",
    size: [
      { name: "S", quantity: 5 },
      { name: "M", quantity: 5 },
      { name: "L", quantity: 5 }
    ],
    color: [
      {
        name: 'Đen', 
        code: '#000000',
        image: [quan8],
      },

    ],
    sku: 10004502,
  },
];
