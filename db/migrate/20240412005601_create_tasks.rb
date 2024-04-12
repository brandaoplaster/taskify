class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description, limit: 200
      t.boolean :status

      t.timestamps
    end
  end
end
