class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    render :new
  end

  def create
    book = Book.new(book_params)

    if book.save
      redirect_to books_url
    else
      render json: book.errors.full_messages
    end
  end

  def destroy
    book = Book.find_by(id: params[:id])
    if book.destroy
      redirect_to books_url
    else
      render json: book.errors.full_messages
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
