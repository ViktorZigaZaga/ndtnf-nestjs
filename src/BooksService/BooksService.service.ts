import { Injectable } from '@nestjs/common'
import { IBook } from './interfaces/book.interface'
import { title } from 'process';

@Injectable() 
export class BooksService {
    private readonly books: IBook[] = [];

    create(book: IBook) {
        this.books.push(book);
    }

    findAll(): IBook[] {
        return this.books;
    }
}

