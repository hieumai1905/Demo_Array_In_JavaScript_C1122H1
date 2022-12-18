/*
    Array trong JavaScript
    1. Khai báo mảng
    2. Truy xuất phần tử trong mảng
    3. Thêm phần tử vào mảng
    4. Xóa phần tử trong mảng
    5. Các hàm xử lý mảng
        - length
        - push
        - pop
        - shift
        - unshift
        - splice
        - slice
        - indexOf
        - lastIndexOf
        - join
        - concat
        - reverse
        - sort
        - forEach
        - map
        - filter
        - reduce
        - every
        - some
        - find
        - findIndex
        - includes
        - flat
        - flatMap
        - copyWithin
        - fill
        - entries
        - keys dùng để lấy ra các key của mảng
        - values
        - from
        - of
        - isArray
        - toString
        - toLocaleString
        - toSource
        ...
 */

// 1. Khai báo mảng
// Cách 1: Khai báo mảng bằng cách sử dụng từ khóa new
let arr = new Array()

// Cách 2: Khai báo mảng bằng cách sử dụng cặp dấu ngoặc vuông
let arr2 = []

//Khai báo mảng bằng cách sử dụng cặp dấu ngoặc vuông và khởi tạo giá trị cho mảng
let arr3 = [1, 2, 3, 4, 5]

// 2. Truy xuất phần tử trong mảng
// Để truy xuất phần tử của mảng ta sử dụng cặp dấu ngoặc vuông và chỉ số của phần tử
console.log(arr3[0])

// 3. Thêm phần tử vào mảng - push sẽ thêm 1 hoặc nhiều phần tử vào cuối mảng
console.log('Array is: ' + arr3)
console.log(arr3.push(6, 9)) // trả về độ dài của mảng sau khi thêm
console.log('Array is: ' + arr3)

// 4. Xóa phần tử trong mảng
console.log('Array is: ' + arr3)
console.log(arr3.pop()) // trả về phần tử cuối cùng của mảng sau khi xóa
console.log('Array is: ' + arr3)

// 5. Các hàm xử lý mảng
// 5.1 length - trả về số phần tử của mảng
console.log('Length array is: ' + arr3.length)

// 5.3 shift - xóa phần tử đầu tiên của mảng và trả về phần tử đó
console.log('Array is: ' + arr3)
console.log(arr3.shift())
console.log('Array is: ' + arr3)

// 5.4 unshift - thêm 1 hoặc nhiều phần tử vào đầu mảng
console.log('Array is: ' + arr3)
console.log(arr3.unshift(10, 2))
console.log('Array is: ' + arr3)

// 5.5 splice - xóa hoặc thêm phần tử vào mảng
// splice(start, deleteCount, item1, item2, ...)
// start: chỉ số bắt đầu xóa hoặc thêm
// deleteCount: số phần tử cần xóa
// item1, item2, ...: các phần tử cần thêm vào mảng
console.log('Array is: ' + arr3)
console.log(arr3.splice(2, 0, 30, 40, 50))
console.log('Array is: ' + arr3)

// 5.6 slice - trích xuất 1 phần của mảng
// slice(start, end)
// start: chỉ số bắt đầu trích xuất
// end: chỉ số kết thúc trích xuất
console.log('Array is: ' + arr3.slice(1, 3)) // trả về mảng mới chứa các phần tử từ chỉ số 1 đến chỉ số 3 (không bao gồm chỉ số 3)

// 5.7 indexOf - trả về chỉ số của phần tử đầu tiên trong mảng tìm thấy
// indexOf(item, start)
// item: phần tử cần tìm
// start: chỉ số bắt đầu tìm kiếm
console.log('Index of 30 is: ' + arr3.indexOf(30))

// 5.8 lastIndexOf - trả về chỉ số của phần tử cuối cùng trong mảng tìm thấy
// lastIndexOf(item, start)
// item: phần tử cần tìm
// start: chỉ số bắt đầu tìm kiếm
console.log('Index of 2 is: ' + arr3.lastIndexOf(2))

// 5.9 concat - nối 2 mảng thành 1 mảng mới
let arr4 = [1, 2, 3]
console.log('Array after use concat: ' + arr3.concat(arr4))

// 5.10 join - nối các phần tử của mảng thành 1 chuỗi
console.log('Array after use join: ' + arr3.join(' - '))

// 5.11 reverse - đảo ngược các phần tử của mảng
console.log('Array after use reverse: ' + arr3.reverse())

// 5.12 sort - sắp xếp các phần tử của mảng
console.log('Array after use sort: ' + arr3.sort())

// 5.13 forEach - duyệt các phần tử của mảng
// forEach(callback)
// callback: hàm được gọi cho mỗi phần tử của mảng
// callback có 3 tham số: item, index, array
arr3.forEach(function (item, index, array) {
    console.log('Item: ' + item)
    console.log('Index: ' + index)
    console.log('Array: ' + array)
})

// 5.14 map - tạo ra mảng mới từ mảng cũ
// map(callback)
// callback: hàm được gọi cho mỗi phần tử của mảng
// callback có 3 tham số: item, index, array
console.log(arr3)
let arr5 = arr3.map(function (item, index, array) {
    return item * 2
})
console.log('Array after x2 use map: ' + arr5)

// 5.15 filter - tạo ra mảng mới từ mảng cũ
// filter(callback)
// callback: hàm được gọi cho mỗi phần tử của mảng
// callback có 3 tham số: item, index, array
// callback trả về true nếu phần tử được chọn
console.log(arr5)
let arr6 = arr5.filter(function (item, index, array) {
    return item > 10
})
console.log('Array have items > 10: ' + arr6)

// 5.16 every - kiểm tra tất cả các phần tử của mảng theo điều kiện
// every(callback)
// callback: hàm được gọi cho mỗi phần tử của mảng
// callback có 3 tham số: item, index, array
// callback trả về true nếu tất cả các phần tử đều thỏa mãn
console.log(arr6)
let result = arr6.every(function (item, index, array) {
    return item > 100
})
console.log('Result: ' + result)

