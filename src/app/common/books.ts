export class Books {
    Books(){}

    constructor(public bookId: number,
        public bookName: string,
        public bookDescription: string,
        public unitPrice: number,
        public bookImage: string,
        public active: number,
        public availableStock: number,
        public dateCreated: Date,
        public lastUpdated: Date,
        public bookCategoryId: number) { }
}
