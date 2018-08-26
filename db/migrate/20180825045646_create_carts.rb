class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :quantity
      t.decimal :price
      t.references :product, foreign_key: true
      t.timestamps
    end
  end
end
