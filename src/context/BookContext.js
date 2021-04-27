import React from 'react' 


export const BookContext =  React.createContext()

class BookContextProvider extends React.Component{
    state = {
    books:[
     {pageNum : 350, title : "Sefiller", author : "Victor Hugo", topic : "English", "publication_dt" : "1950", imageURL : "http://kbimages1-a.akamaihd.net/Images/6faa402f-1a95-4897-93ff-8286cbe0e94f/255/400/False/image.jpg"},
     {pageNum : 250, title : "Hayvanlar Ciftligi", author : "George Orwell", topic : "Turkish", "publication_dt" : "1936", imageURL : "https://img.kitapyurdu.com/v1/getImage/fn:11346129/wh:true/miw:200/mih:200"},
     {pageNum : 200, title : "1984", author : "George Orwell", topic : "English", "publication_dt" : "1942", imageURL : "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg"},
     {pageNum : 400, title : "Ince Memed", author : "Yasar Kemal", topic : "Turkish", "publication_dt" :  "1974", imageURL : "https://cdn.kidega.com/product-images-opt/publication/97/89/75/9789750807145.png?v=2020-10-17"},
     {pageNum : 184, title : "GunesDamlasi", author : "Eleni Hacudi Tunta", topic : "Greek", "publication_dt" : "1984", imageURL : "https://cdn03.ciceksepeti.com/cicek/kc8145444-1/S/gunesdamlasi-kc8145444-1-7fa726e9bde445df8e792d6f7c4b106a.jpg"},
     {pageNum : 225, title : "KARAMAZOV KARDESLER", author : "Fyodor Dostoyevski", topic : "Turkish", publication_dt : "1970", imageURL : "https://i.dr.com.tr/cache/500x400-0/originals/0001803800001-1.jpg" }
   ]
    }

    render () {
        return (
            <BookContext.Provider value={{...this.state}}>
                {this.props.children}

            </BookContext.Provider>
        )
    }
}

export default BookContextProvider



// 1 - ) Default Value -----> this.context.defaultValue
// Context nesnesini olusturduk (BookContext.js)
// Baslangic degeri verdik ve default export ettik (BookContext.js)
// Ilgili Compenent da import ettik (BookList.js)
// Context Type yardimi ile iligili componenta atadik (BookList.js)
// this.context ile ilgili veriye ulastik (BookList.js)



// 2 - ) Provider -----> Consumer
// Class Component olusturduk ve veriyi state icine koyduk (BookContext.js)
// Context e ait Provider ile state icinde bulunan veriyi aldik (BookContext.js)
// Parent-child iliskisi {this.props.children}
// Veriyi gonderecegimiz Component a Context i import ediyoruz (BookList.js)
// Render icerisinde Consumer ile Provider dan gelen veriyi yakaliyoruz (Book)

