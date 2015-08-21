# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150821183643) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.integer  "user_1_status", default: 0
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.integer  "user_1_id"
    t.integer  "user_2_id"
    t.integer  "user_2_status", default: 0
  end

  add_index "conversations", ["user_1_id"], name: "index_conversations_on_user_1_id", using: :btree
  add_index "conversations", ["user_2_id"], name: "index_conversations_on_user_2_id", using: :btree

  create_table "faculties", force: :cascade do |t|
    t.string   "name",                                null: false
    t.decimal  "latitude",   precision: 10, scale: 7
    t.decimal  "longitude",  precision: 10, scale: 7
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  create_table "majors", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "faculty_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "majors", ["faculty_id"], name: "index_majors_on_faculty_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.text     "content"
    t.boolean  "read",            default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "user_id"
    t.integer  "conversation_id"
  end

  add_index "messages", ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "preferences", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "gender"
    t.integer  "faculty_id"
    t.integer  "major_id"
    t.integer  "residence_id"
    t.integer  "year",                    default: [],                array: true
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.boolean  "filter_facebook_friends", default: true
  end

  add_index "preferences", ["user_id"], name: "index_preferences_on_user_id", using: :btree

  create_table "residences", force: :cascade do |t|
    t.string   "name",                                null: false
    t.decimal  "latitude",   precision: 10, scale: 7
    t.decimal  "longitude",  precision: 10, scale: 7
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "facebook_id",                        null: false
    t.string   "nusnet_id"
    t.string   "name"
    t.text     "profile_picture_url"
    t.string   "last_name"
    t.string   "email"
    t.string   "gender"
    t.integer  "matriculation_year"
    t.string   "access_token"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "first_major_id"
    t.integer  "second_major_id"
    t.integer  "residence_id"
    t.text     "facebook_token",                     null: false
    t.text     "ivle_token"
    t.datetime "last_activity_at"
    t.boolean  "online",              default: true
  end

  add_index "users", ["facebook_id"], name: "index_users_on_facebook_id", unique: true, using: :btree
  add_index "users", ["residence_id"], name: "index_users_on_residence_id", using: :btree

  add_foreign_key "conversations", "users", column: "user_1_id"
  add_foreign_key "conversations", "users", column: "user_2_id"
  add_foreign_key "majors", "faculties"
  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
  add_foreign_key "preferences", "users"
  add_foreign_key "users", "majors", column: "first_major_id"
  add_foreign_key "users", "majors", column: "second_major_id"
  add_foreign_key "users", "residences"
end
