json.extract! @user, :username, :id, :playlists, :followed_playlists, :followed_users
json.followed_users @user.followed_users do |user|
  json.id user.id
  json.username user.username
end
