import aosomi1 from './Product/AoSoMi/aosomi1.png';
import aosomi2 from './Product/AoSoMi/aosomi2.png';
import aosomi3 from './Product/AoSoMi/aosomi3.png';
import aosomi4 from './Product/AoSoMi/aosomi4.png';

import dam1 from './Product/Dam/dam1.png';
import dam1_1 from './Product/Dam/dam1_1.png';
import dam1_2 from './Product/Dam/dam1_2.png';
import dam1_3 from './Product/Dam/dam1_3.png';


import dam2 from './Product/Dam/dam2.png';
import dam2_1 from './Product/Dam/dam2_1.png';
import dam2_2 from './Product/Dam/dam2_2.png';
import dam2_3 from './Product/Dam/dam2_3.png';

import dam3 from './Product/Dam/dam3.png';
import dam3_1 from './Product/Dam/dam3_1.png';
import dam3_2 from './Product/Dam/dam3_2.png';
import dam4 from './Product/Dam/dam4.png';
import dam5 from './Product/Dam/dam5.png';
import dam6 from './Product/Dam/dam6.png';
import dam7 from './Product/Dam/dam7.png';
import dam8 from './Product/Dam/dam8.png';
import aokieu1 from './Product/AoKieu/aokieu1.png'
import aokieu1_2 from './Product/AoKieu/aokieu1_2.png'
import aokieu1_3 from './Product/AoKieu/aokieu1_3.png'
import aokieu2 from './Product/AoKieu/aokieu2.png'
import aokieu3 from './Product/AoKieu/aokieu3.png'
import aokieu4 from './Product/AoKieu/aokieu4.png'
import aokieu5 from './Product/AoKieu/aokieu5.png'
import aokieu6 from './Product/AoKieu/aokieu6.png'

import aothun1 from './Product/AoThun/aothun1.png';
import aothun2 from './Product/AoThun/aothun2.png';

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
    id: "2",
    name: "Đầm tencel nhún trang trí cổ chữ V",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 2290000,
    image: [dam1, dam1_1, dam1_2, dam1_3],
    category: "Đầm",
    subcategory: "Đầm tencel",
    size: ["S", "M", "L"],
    color: ['Hồng'],
   
    sku: 10004219,
    latestProduct: true,
  },
  {
    id: "3",
    name: "Đầm tencel xếp nếp trang trí cổ ngang",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 2290000,
    image: [dam2, dam2_1, dam2_2, dam2_3],
    category: "Đầm",
    subcategory: "Đầm tencel",
    color: ['Cam'],
 
    size: ["S", "M", "L"],
    sku: 10004232,
    latestProduct: true,
  },
  {
    id: "4",
    name: "Đầm tencel cổ ngang",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 1990000,
    image: [dam3, dam3_1, dam3_2],
    category: "Đầm",
    subcategory: "Đầm tencel",
    color: ['Hồng'],
  
    size: ["S", "M", "L"],
    sku: 10004218,
    latestProduct: true,
  },
  {
    id: "5",
    name: "Đầm tencel cổ tim",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 2290000,
    image: [dam4],
    category: "Đầm",
    subcategory: "Đầm tencel",
    color: ['Hồng'],
 
    size: ["S", "M", "L"],
    sku: 10004213,
    latestProduct: true,
  },
  {
    id: "6",
    name: "Áo kiểu tencel cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 890000,
    image: [aokieu1, aokieu1_2, aokieu1_3],
    category: "Áo",
    subcategory: "Áo kiểu",
    color: ['Đen'],

    size: ["S", "M", "L"],
    sku: 10004743,
    latestProduct: true,
  },
  {
    id: "7",
    name: "Áo sơ mi thô cổ đức",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 1490000,
    image: [aosomi1],
    category: "Áo",
    subcategory: "Áo sơ mi",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004454,
    color: ['Xanh'],

  },
  {
    id: "8",
    name: "Đầm tuytsi cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 249000,
    image: [dam5],
    category: "Đầm",
    subcategory: "Đầm tuytsi",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004308,
    color: ['Hồng'],

  },
  {
    id: "9",
    name: "Áo thun giữ nhiệt cổ lọ",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 207000,
    image: [aothun2],
    category: "Áo",
    subcategory: "Áo thun",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10003840,
    color: ['Nâu'],

  },
  {
    id: "10",
    name: "Đầm tencel dây lưng rời cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 2290000,
    image: [dam6],
    category: "Đầm",
    subcategory: "Đầm tencel",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004207,
    color: ['Đen'],
    imagesByColor: {
      Đen: [dam6]
    },
  },
  {
    id: "11",
    name: "Đầm Tuytxi cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 2290000,
    image: [dam7],
    category: "Đầm",
    subcategory: "Đầm tuytsi",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004208,
    color: ['Xám'],

  },
  {
    id: "12",
    name: "Đầm Tuytxi chi tiết trang trí cổ tròn",
    description: "Chất liệu: Vải, Form: Oversize, Màu sắc: Đen/xám/đỏ, Thiết kế: Kẻ Sọc",
    price: 2290000,
    image: [dam8],
    category: "Đầm",
    subcategory: "Đầm tuytsi",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004458,
    color: ['Hồng'],

  },
  {
    id: "13",
    name: "Áo sơ mi tơ cổ đức",
    description: `Áo sơ mi 1 lớp dáng suông, tay ngắn, cổ đức, cúc đính máy, túi ốp. Áo sơ mi dáng suông kết hợp túi ốp tinh tế tạo 
                  nên tổng thể vừa giản dị vừa cuốn hút. Họa tiết Toile de Jouy in truyền nhiệt được xử lý sắc nét trên nền vải trắng, 
                  gợi lên nét lãng mạn cổ điển pha chút hiện đại – như một lời thì thầm dịu dàng của mùa hè nước Pháp. Chất liệu vải mềm mại, 
                  mỏng nhẹ và thoáng mát giúp nàng luôn cảm thấy dễ chịu trong những ngày nắng.`,
    price: 1290000,
    image: [aosomi2],
    category: "Áo",
    subcategory: "Áo sơ mi",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004424,
    color: ['Hồng'],

  },
    {
    id: "14",
    name: "Áo sơ mi lụa nhân tạo cổ đức kiểu",
    description: `Áo sơ mi 1 lớp dáng suông vừa, tay ngắn, cổ đức kiểu, cúc đính máy. Phần tay bồng nhẹ tạo điểm nhấn duyên dáng, 
                  đồng thời giúp tôn lên sự mềm mại cho đôi tay. Phom dáng suông vừa vặn, thoải mái, dễ dàng kết hợp cùng chân váy hoặc quần ống suông 
                  để hoàn thiện một diện mạo thanh thoát, phù hợp từ công sở đến những buổi hẹn hò nhẹ nhàng ngày hè. Thiết kế đơn giản nhưng tinh tế, 
                  dễ mặc và dễ ứng dụng trong nhiều hoàn cảnh.`,
    price: 1490000,
    image: [aosomi3],
    category: "Áo",
    subcategory: "Áo sơ mi",
    bestSeller: true,
    size: ["S", "M", "L"],
    sku: 10004454,
    color: ['Trắng'],

  },
  {
    id: "15",
    name: "Áo sơ mi lụa tơ tằm cổ đức",
    description: `Vải lụa tơ tằm`,
    price: 2990000,
    image: [aosomi4],
    category: "Áo",
    subcategory: "Áo sơ mi",
    bestSeller: true,
    size: ["M", "L",'XL'],
    sku: 10004454,
    color: ['Trắng'],

  },
  {
    id: "16",
    name: "Áo thun đính hoa trang trí cổ chữ V kiểu",
    description: `Áo thun 1 lớp dáng ôm, tay dài, cổ v kiểu, đính hoa trang trí. 
    Điểm nổi bật ở thiết kế nằm ở phần đính hạt trang trí hoa cùng phom dáng ôm vào cơ thể, 
    khéo léo tôn lên đường nét cơ thể mà vẫn tạo sự thoải mái cho người mặc. 
    Với chiếc áo này thì chiếc quần âu dài hoặc chân váy dáng xòe sẽ luôn là sự ưu tiên.`,
    price: 387000,
    image: [aothun1],
    category: "Áo",
    subcategory: "Áo thun",
    bestSeller: true,
    size: ["M", "L",'XL'],
    sku: 10003860,
    color: ['Đen'],

  },
  {
    id: "17",
    name: "Áo kiểu đũi Thêu trang trí cổ đức",
    description: `Áo kiểu thêu trang trí, 1 lớp dáng suông, tay ngắn, cổ đức, túi ốp, thêu trang trí, thêu máy. 
    Thiết kế dáng suông mang lại cảm giác thoải mái, trong khi chi tiết thêu được xử lý khéo léo giúp tạo điểm nhấn nghệ thuật trên nền vải đũi mộc mạc. `,
    price: 387000,
    image: [aokieu2],
    category: "Áo",
    subcategory: "Áo kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004499,
    color: ['Trắng'],

  },
  {
    id: "18",
    name: "Áo kiểu tencel cổ thuyền",
    description: `Áo kiểu trang trí nhún eo, 1 lớp dáng suông, tay ngắn, cổ thuyền.`,
    price: 1290000,
    image: [aokieu3],
    category: "Áo",
    subcategory: "Áo kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004206,
    color: ['Trắng'],

  },
  {
    id: "19",
    name: "Áo kiểu đũi Thêu trang trí",
    description: `Áo kiểu 1 lớp dáng suông ngắn, sát nách, cổ tròn, cài cúc cổ sau, thêu trang trí, thêu máy.`,
    price: 1290000,
    image: [aokieu4],
    category: "Áo",
    subcategory: "Áo kiểu",
    bestSeller: true,
    size: ["M", "L",'XL'],
    sku: 10004378,
    color: ['Đen'],

  },
  {
    id: "20",
    name: "Áo len dây trang trí cổ tròn",
    description: `Áo len dáng ôm vừa, tay dài, cổ tròn, khóa sau giọt lệ, 
    dây trang trí quanh viền cổ áo và cổ tay. Thiết kế basic dễ mặc cùng quần jeans hoặc chân váy thanh lịch.`,
    price: 267000,
    image: [aokieu5],
    category: "Áo",
    subcategory: "Áo kiểu",
    bestSeller: true,
    size: ["M", "L",'XL'],
    sku: 10002806,
    color: ['Trắng'],

  },
  {
    id: "21",
    name: "Áo len",
    description: `Áo len dáng ôm vừa, tay dài, cổ tròn, khóa sau giọt lệ, 
    dây trang trí quanh viền cổ áo và cổ tay. Thiết kế basic dễ mặc cùng quần jeans hoặc chân váy thanh lịch.`,
    price: 750000,
    image: [aokieu6],
    category: "Áo",
    subcategory: "Áo kiểu",
    bestSeller: true,
    size: ["M", "L",'XL'],
    sku: 10000435,
    color: ['Trắng'],

  },
  {
    id: "22",
    name: "Quần ống suông đũi",
    description: `Quần 1,5 lớp dáng ống suông dài, 
    cạp chun sau, khóa trước, cúc, túi ốp/túi dọc. Quần dáng ống suông dài với phần cạp chun sau giúp tăng độ thoải mái khi mặc, 
    đồng thời giữ phom dáng chỉnh chu suốt ngày dài.`,
    price: 990000,
    image: [quan1],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004379,
    color: ['Ghi'],

  },
  {
    id: "23",
    name: "Quần ống suông đũi",
    description: `Quần 1,5 lớp dáng ống suông dài, 
    cạp chun sau, khóa trước, cúc, túi ốp/túi dọc. Quần dáng ống suông dài với phần cạp chun sau giúp tăng độ thoải mái khi mặc, 
    đồng thời giữ phom dáng chỉnh chu suốt ngày dài.`,
    price: 1290000,
    image: [quan2],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004379,
    color: ['Xanh'],

  },
  {
    id: "24",
    name: "Quần ống rộng tencel nhún trang trí",
    description: `Quần 1,5 lớp dáng ống suông dài, 
    cạp chun sau, khóa trước, cúc, túi ốp/túi dọc. Quần dáng ống suông dài với phần cạp chun sau giúp tăng độ thoải mái khi mặc, 
    đồng thời giữ phom dáng chỉnh chu suốt ngày dài.`,
    price: 1490000,
    image: [quan3],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004215,
    color: ['Đen'],

  },
  {
    id: "25",
    name: "Quần ống suông đũi",
    description: `Quần dáng ống suông dài, cạp rời, khóa trước, cúc, túi chéo/túi cơi giả. 
    Thiết kế tôn dáng, khéo léo kéo dài chân hiệu quả. Dễ mặc cùng các items áo sơ mi, áo giữ nhiệt và áo khoác linh hoạt.`,
    price: 387000,
    image: [quan4],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10003717,
    color: ['Nâu'],

  },
  {
    id: "26",
    name: "Quần soóc Tuytxi Kẹp ren trang trí",
    description: `Quần soóc kẹp ren trang trí, 1 lớp dáng ống suông ngắn , cạp rời, khóa sườn, móc, túi dọc. 
    Sự kết hợp giữa vẻ năng động của quần soóc và nét mềm mại từ chi tiết ren mang đến thiết kế vừa trẻ trung, vừa nữ tính.`,
    price: 1190000,
    image: [quan5],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004461,
    color: ['Đen'],

  },
  {
    id: "27",
    name: "Quần soóc Tuytxi Kẹp ren trang trí",
    description: `Quần soóc kẹp ren trang trí, 1 lớp dáng ống suông ngắn , cạp rời, khóa sườn, móc, túi dọc. 
    Sự kết hợp giữa vẻ năng động của quần soóc và nét mềm mại từ chi tiết ren mang đến thiết kế vừa trẻ trung, vừa nữ tính.`,
    price: 1190000,
    image: [quan5],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004461,
    color: ['Đen'],

  },
  {
    id: "28",
    name: "Quần soóc Tuytxi",
    description: `Quần 2 lớp dáng ống suông ngắn, cạp rời, khóa sườn, móc, túi dọc, túi ốp có nắp.`,
    price: 990000,
    image: [quan6],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004423,
    color: ['Trắng'],

  },
  {
    id: "30",
    name: "Quần âu Tuytxi",
    description: `Quần âu 1 lớp, dáng ống côn, cạp rời, khóa trước, cúc, móc, túi dọc. 
    Thiết kế ôm vừa vặn từ trên xuống dưới tạo nên vẻ ngoài thanh thoát, gọn gàng và vô cùng thời thượng.`,
    price: 1290000,
    image: [quan8],
    category: "Quần",
    subcategory: "Quần kiểu",
    bestSeller: true,
    size: ["S","M", "L",'XL'],
    sku: 10004502,
    color: ['Đen'],

  },



  
];
