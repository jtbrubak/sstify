class CreateUserFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :user_follows do |t|
      t.integer :follower_id
      t.integer :followed_id
    end
  end
end
